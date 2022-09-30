import { AstronomyPictureOfDay, PrismaClient } from "@prisma/client";

import { getWithAuthHeaders } from "../../../lib/api";
import { formatDate, now } from "../../../lib/date";
import { withCache } from "../../../lib/cache";

import type { AstronomyPictureOfDayResponse } from "../d";

const prisma = new PrismaClient();

const getImage = (start_date: string) =>
  getWithAuthHeaders<AstronomyPictureOfDayResponse>(
    `${process.env.NASA_API_URL}/planetary/apod`,
    { start_date }
  );

const toAstronomyPictureOfDay = ({
  date,
  explanation,
  hdurl,
  media_type,
  title,
  url,
}: AstronomyPictureOfDayResponse): Partial<AstronomyPictureOfDay> => ({
  date: date?.toString(),
  explanation: explanation?.toString(),
  hdurl: hdurl?.toString(),
  media_type: media_type?.toString(),
  title: title?.toString(),
  url: url?.toString(),
});

const astronomyPictureOfDay = async () => {
  const date = formatDate(now());

  return await withCache(
    () => getImage(date),
    () =>
      prisma.astronomyPictureOfDay.findFirst({
        where: { date },
      }),
    (response) =>
      prisma.astronomyPictureOfDay.create({
        data: toAstronomyPictureOfDay(response),
      })
  );
};

export default astronomyPictureOfDay;

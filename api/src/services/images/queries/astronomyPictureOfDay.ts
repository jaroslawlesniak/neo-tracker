import { getWithAuthHeaders } from "../../../lib/api";

import type { AstronomyPictureOfDayResponse } from "../d";

import { formatDate, now } from "../../../lib/date";
import { cacheableRequest } from "../../../lib/cache";
import { AstronomyPictureOfDay } from "@prisma/client";

const getImage = (start_date: string) =>
  getWithAuthHeaders<AstronomyPictureOfDayResponse>(
    "https://api.nasa.gov/planetary/apod",
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

  return await cacheableRequest(
    {
      collection: "astronomyPictureOfDay",
      predicate: { date },
    },
    () => getImage(date),
    toAstronomyPictureOfDay
  );
};

export default astronomyPictureOfDay;

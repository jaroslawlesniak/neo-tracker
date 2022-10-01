import { AstronomyPictureOfDay, PrismaClient } from '@prisma/client';

import { getWithAuthHeaders } from '@/lib/api';
import { withCache } from '@/lib/cache';

import { getStatefullAtronomyPictureOfDay } from './services';

import type { AstronomyPictureOfDayResponse } from '../d';

const prisma = new PrismaClient();

type Request = {
  date: string;
  device_id: string;
}

const fetchImage = (date: string) =>
  getWithAuthHeaders<AstronomyPictureOfDayResponse>(
    `${process.env.NASA_API_URL}/planetary/apod`,
    { start_date: date, end_date: date, }
  );

const readFromCacheBy = (date: string) =>
  prisma.astronomyPictureOfDay.findFirst({
    where: { date, },
    select: { id: true, },
  });

const persistImage = (data: AstronomyPictureOfDayResponse) =>
  prisma.astronomyPictureOfDay.create({
    data: toAstronomyPictureOfDay(data),
  });

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

const astronomyPictureOfDay = async (_: never, { date, device_id, }: Request) => {
  const apod = await withCache(
    () => readFromCacheBy(date),
    () => fetchImage(date),
    persistImage
  );

  if (apod) {
    return await getStatefullAtronomyPictureOfDay(apod.id, device_id);
  }

  return null;
};

export default astronomyPictureOfDay;

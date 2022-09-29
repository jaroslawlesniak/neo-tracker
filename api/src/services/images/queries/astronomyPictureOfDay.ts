import { getWithAuthHeaders } from "../../../lib/api";

import type { AstronomyPictureOfDayResponse } from "../d";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const astronomyPictureOfDay = async () => {
  const start_date = "2022-09-29";

  const picture = await prisma.astronomyPictureOfDay.findFirst({
    where: {
      date: start_date,
    },
  });

  if (picture) {
    return picture;
  } else {
    const {
      date,
      explanation,
      hdurl,
      media_type,
      title,
      url,
    } = await getWithAuthHeaders<AstronomyPictureOfDayResponse>(
      "https://api.nasa.gov/planetary/apod",
      { start_date }
    );

    const image = await prisma.astronomyPictureOfDay.create({
      data: {
        date: date?.toString(),
        explanation: explanation?.toString(),
        hdurl: hdurl?.toString(),
        media_type: media_type?.toString(),
        title: title?.toString(),
        url: url?.toString(),
      },
    });

    return image;
  }
};

export default astronomyPictureOfDay;

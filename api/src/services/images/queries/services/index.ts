import { AstronomyPictureOfDay, KudoType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type StatefulAstronomyPictureOfDay = AstronomyPictureOfDay & {
  kudos: Record<KudoType, number>;
  reaction?: KudoType;
}

export const getStatefullAtronomyPictureOfDay = async (id: string, deviceId: string): Promise<StatefulAstronomyPictureOfDay | null> => {
  const data = await prisma.astronomyPictureOfDay.findFirst({
    where: {
      id,
    },
    include: {
      kudos: {
        select: {
          device_id: true,
          type: true,
        }
      },
    },
  });

  if (data) {
    return {
      ...data,
      kudos: {
        heart: data.kudos.reduce((acc, val) => val.type === 'heart' ? acc + 1 : acc, 0),
      },
      reaction: data.kudos.find(({ device_id }) => device_id === deviceId)?.type,
    }
  }

  return null;
}

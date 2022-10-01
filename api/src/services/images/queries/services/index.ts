import {
  AstronomyPictureOfDay,
  ReactionType,
  PrismaClient,
  Reaction,
} from "@prisma/client";
import { withTruthy } from "../../../../lib/data";

const prisma = new PrismaClient();

type StatefulAstronomyPictureOfDay = AstronomyPictureOfDay & {
  reactions: Record<ReactionType, number>;
  reaction?: ReactionType;
};

type AstronomyPictureOfDayWithIncludes = AstronomyPictureOfDay & {
  reactions?: Reaction[];
};

const aggregate = (reactions: Reaction[], type: ReactionType) =>
  reactions.reduce((acc, val) => (val.type === type ? acc + 1 : acc), 0);

const toStatefulAstronomyPicture =
  (deviceId: string) =>
  (data: AstronomyPictureOfDayWithIncludes): StatefulAstronomyPictureOfDay => {
    console.log(data)
    return ({
      ...data,
      reactions: {
        heart: aggregate(data.reactions || [], "heart"),
      },
      reaction: data.reactions?.find(({ device_id }) => device_id === deviceId)
        ?.type,
    });
  }

export const getStatefullAtronomyPictureOfDay = async (
  id: string,
  deviceId: string
): Promise<StatefulAstronomyPictureOfDay | null> =>
  prisma.astronomyPictureOfDay
    .findFirst({
      where: {
        id,
      },
      include: {
        reactions: true,
      },
    })
    .then(withTruthy(toStatefulAstronomyPicture(deviceId)));

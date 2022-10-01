import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Request = {
  id: string;
  device_id: string;
}

type Response = {
  status: boolean;
}

const removeReactionFromAstronomyPictureOfDay = async (_: never, { id, device_id, }: Request): Promise<Response> => {
  await prisma.reaction.delete({
    where: {
      reaction_compound_id: {
        astronomy_picture_of_day_id: id,
        device_id: device_id,
      },
    },
  });

  return { status: true, };
};

export default removeReactionFromAstronomyPictureOfDay;

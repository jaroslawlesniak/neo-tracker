import { PrismaClient } from '@prisma/client';
import { formatDateTime, now } from '../../../lib/date';

const prisma = new PrismaClient();

type Request = {
  id: string;
  device_id: string;
}

type Response = {
  status: boolean;
}

const addReactionToAstronomyPictureOfDay = async (_: never, { id, device_id }: Request): Promise<Response> => {
  const eventTime = formatDateTime(now());

  await prisma.reaction.upsert({
    create: {
      added_at: eventTime,
      device_id,
      type: 'heart',
      astronomy_picture_of_day: {
        connect: {
          id
        }
      }
    },
    update: {
      added_at: eventTime
    },
    where: {
      reaction_compound_id: {
        astronomy_picture_of_day_id: id,
        device_id: device_id,
      },
    }
  });

  return { status: true };
}

export default addReactionToAstronomyPictureOfDay;

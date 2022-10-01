import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Request = {
  id: string;
  device_id: string;
}

const addKudoToAstronomyPictureOfDay = (_: never, args: Request) => {
  console.log(args);

  return null;
}

export default addKudoToAstronomyPictureOfDay;

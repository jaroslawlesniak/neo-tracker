import { getWithAuthHeaders } from "../../../lib/api";

import type { AstronomyPictureOfDay } from "../d";

const astronomyPictureOfDay = async () => {
  const image = await getWithAuthHeaders<AstronomyPictureOfDay>('https://api.nasa.gov/planetary/apod');

  return image;
};

export default astronomyPictureOfDay;

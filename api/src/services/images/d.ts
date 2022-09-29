type MediaType = 'image' | 'video';

export type AstronomyPictureOfDay = {
  date: String
  explanation: String
  hdurl: String
  media_type: MediaType
  service_version: String
  title: String
  url: String
}

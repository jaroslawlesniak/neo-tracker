type MediaType = 'image' | 'video';

export type AstronomyPictureOfDayResponse = {
  date?: string
  explanation?: string
  hdurl?: string
  media_type?: MediaType
  service_version?: string
  title?: string
  url?: string
}

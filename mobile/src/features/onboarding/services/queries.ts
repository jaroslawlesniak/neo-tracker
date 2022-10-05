import { gql } from '@apollo/client';

export const FETCH_ASTRONOMICAL_PICTURE_OF_DAY = gql`
  query FetchAstronomicalPictureOfDay($deviceId: String) {
    astronomyPictureOfDay(device_id: $deviceId) {
      date
      explanation
      hdurl
      media_type
      service_version
      title
      url
      reaction
      copyright
      reactions {
        heart
      }
    }
  }
`;

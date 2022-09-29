import { gql } from "apollo-server-express";

const Schema = gql`
  type Neo {
    id: ID!
    name: String
  }

  enum MediaType {
    image
    video
  }

  type AstronomyPictureOfDay {
    date: String
    explanation: String
    hdurl: String
    media_type: MediaType
    service_version: String
    title: String
    url: String
  }

  type Query {
    astronomyPictureOfDay: AstronomyPictureOfDay
    nearEarthObjects: [Neo]
  }

  type Mutation {
    addPerson(name: String): Neo
  }
`;

export default Schema;

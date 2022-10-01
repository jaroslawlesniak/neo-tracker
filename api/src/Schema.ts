import { gql } from "apollo-server-express";

const Schema = gql`
  type Neo {
    id: ID!
    name: String
  }

  type Response {
    status: Boolean!
  }

  enum MediaType {
    image
    video
  }

  enum KudoType {
    heart
  }

  type Kudo {
    heart: Int
  }

  type AstronomyPictureOfDay {
    date: String
    explanation: String
    hdurl: String
    media_type: MediaType
    service_version: String
    title: String
    url: String
    reaction: KudoType
    kudos: [Kudo]
  }

  type Query {
    astronomyPictureOfDay: AstronomyPictureOfDay
    nearEarthObjects: [Neo]
  }

  type Mutation {
    addKudoToAstronomyPictureOfDay(id: String, device_id: String): Response
  }
`;

export default Schema;

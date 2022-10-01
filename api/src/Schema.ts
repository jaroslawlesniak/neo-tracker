import { gql } from 'apollo-server-express';

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

  enum ReactionType {
    heart
  }

  type Reaction {
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
    reaction: ReactionType
    reactions: Reaction
  }

  type Query {
    astronomyPictureOfDay(date: String, device_id: String): AstronomyPictureOfDay
    nearEarthObjects: [Neo]
  }

  type Mutation {
    addReactionToAstronomyPictureOfDay(id: String, device_id: String): Response
    removeReactionFromAstronomyPictureOfDay(id: String, device_id: String): Response
  }
`;

export default Schema;

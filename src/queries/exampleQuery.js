import { gql } from "@apollo/client";

export const EXAMPLE_QUERY = gql`
  query ContactDataQuery {
    contactData: allContentfulContactData {
      nodes {
        type
        spaceId
        value
      }
    }
  }
`;

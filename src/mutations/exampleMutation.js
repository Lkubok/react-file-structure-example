import { gql } from "@apollo/client";

export const EXAMPLE_MUTATION = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;

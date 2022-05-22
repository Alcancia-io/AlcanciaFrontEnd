import { gql } from 'apollo-angular';

/* TODO: Add `onboarded` field when
 * https://github.com/Alcancia-io/Alcancia-nest-graphql/issues/13 is fixed */
export const loginQuery = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name,
      surname
    }
  }
`;

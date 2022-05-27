import { gql } from 'apollo-angular';

export const getAllUserTransactions = gql`
	query($userId: ID!){
		getAllUserTransactions(userId: $userId) {
			createdAt,
			transactionID,
			sourceAmount,
			sourceAsset,
			targetAsset,
			amount,
			type
		}
	}
`;

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


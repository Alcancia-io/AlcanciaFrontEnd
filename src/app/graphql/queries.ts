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

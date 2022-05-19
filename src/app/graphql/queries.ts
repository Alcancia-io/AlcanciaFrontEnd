import { gql } from 'apollo-angular';

export const getUserTransaction = gql`
	query($transactionId: ID!, $userId: ID!){
		getUserTransaction(transactionId: $transactionId, userId,: $userId) {
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

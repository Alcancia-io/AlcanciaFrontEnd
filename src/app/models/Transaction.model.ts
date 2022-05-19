export interface Transaction {
	createdAt: string;
	transactionID: string;
	sourceAmount: number;
	sourceAsset: string;
	targetAsset: string;
	amount: number;
	type: string;
}

export interface UserTransactionResponse {
	getUserTransaction: Transaction;
}

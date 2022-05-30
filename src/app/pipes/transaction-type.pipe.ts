import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionType' })

export class TransactionTypePipe implements PipeTransform {
	transform(transaction: string): string {
		if (transaction === 'DEPOSIT') return 'Depósito'
		if (transaction === 'WITHDRAW') return 'Retiro'
		if (transaction === 'YIELD') return 'Pago Rendimientos'
	}
}

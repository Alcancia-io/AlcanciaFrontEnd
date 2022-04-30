import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TransactionService } from '../../services/transaction.service';
import { SectionStorageService } from '../../services/sectionStorage.service';
import { WithDrawModel } from '../../models/withdraw';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  exform: FormGroup;
  userId;
  amountExceededMessage: boolean = false;
  documentInformationMessage = "<strong>INE:</strong>  Documento de Identidad Mexicana <br/><br/> <strong>CEDULA:</strong> Documento de Identidad Dominicana";

  constructor(private userService: UserService, private transactionService: TransactionService, private sectionStorageService: SectionStorageService, private router: Router) { }

  public errorMessages = {
    country: [{type: 'required', message: "El pais es requerido"}],
    bank: [{type: 'required', message: 'El banco es requerido'}],
    bankAccount: [{type: 'required', message: 'El No. Cuenta/ CLABE es requerido'}],
    withdrawAmount: [{type: 'required', message: 'El monto a retirar es requerido'}],
    identificationNumber: [{type: 'required', message: 'El INE/CEDULA es requerido'}],
    beneficiaryName: [{type: 'required', message: 'El nombre del beneficiario es requerido'}]
  } 

  ngOnInit() {
    this.exform = new FormGroup({
      'country': new FormControl(null, Validators.required),
      'bank': new FormControl(null, Validators.required),
      'bankAccount': new FormControl(null, Validators.required),
      'withdrawAmount': new FormControl(null, Validators.required),
      'identificationNumber': new FormControl(null, Validators.required),
      'beneficiaryName': new FormControl(null, Validators.required)
    });
  }

  async  requestWithdraw(){
    this.userId =  this.sectionStorageService.getData("UserId");
    await this.userService.getUserBalance(this.userId).then(userBalance => { 
      if(userBalance.balance < this.exform.value.withdrawAmount){
        this.amountExceededMessage = true;
      }else {
        const withdrawData = new WithDrawModel();
        withdrawData.account =  this.exform.value.bankAccount;
        withdrawData.amount =  this.exform.value.withdrawAmount;
        withdrawData.bank =  this.exform.value.bank;
        withdrawData.beneficiary =  this.exform.value.beneficiaryName; 
        withdrawData.cedula =  this.exform.value.identificationNumber; 
        withdrawData.country =  this.exform.value.country; 

        this.transactionService.requestWithdraw(withdrawData).then(response => {

          this.router.navigate(['/withdraw/successfull'],{state: {data: {response}}});
          console.log(response);
        });
      }  
    }); 
  }

}

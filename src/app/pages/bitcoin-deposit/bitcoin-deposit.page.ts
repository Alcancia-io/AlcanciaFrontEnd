import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-bitcoin-deposit',
  templateUrl: './bitcoin-deposit.page.html',
  styleUrls: ['./bitcoin-deposit.page.scss'],
})
export class BitcoinDepositPage implements OnInit {

  constructor(private toastr: ToastController) { }

  ngOnInit() {
  }

  copyToClipboard() {
    navigator.clipboard.writeText('bc1q72scrxlhttzhm0n7v4ntklz78n6ssgaxxj0gdf');
    this.toast('Copy to clipboard sucessfully!', 'success');
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 3000
    });

    toast.present();
  }//end of toast

}

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { loadingController } from '@ionic/core';
import {PaypalService} from 'src/app/services/paypal.service';
import { Router } from '@angular/router';
import { ConfirmOrder } from 'src/app/models/paypalOrder';
import { CreateOrder } from '../../../models/paypalOrder';
import { ALCANCIA_SERVER_URL } from "src/environments/environment";
declare var paypal;

@Component({
  selector: 'app-paypalPaymentOptions',
  templateUrl: './paypalPaymentOptions.component.html',
  styleUrls: ['./paypalPaymentOptions.component.scss']
})
export class PaypalPaymentOptionsComponent implements OnInit {
  @Input() amount = '';
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  
 
  constructor(
    private paypalService: PaypalService, 
    private router: Router,
    private toastr:  ToastController
    ) { }
  
   orderToken: ConfirmOrder;
  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => { 
          const createorder = new CreateOrder();
          createorder.amount = this.amount;  

          return fetch(`${ALCANCIA_SERVER_URL}/deposits/create-order`, {
            method: 'post'
            }).then(res => {
              console.log(res);
              return res.json();
            })  
            .then(function(orderData) { 
                return orderData.id;
            });
          // this.paypalService.createOrder(createorder).then(resp => {
          //   fetch
          //   return resp.orderId;
          
          // });
          // const orderDetails = actions.order.create({
          //   purchase_units: [
          //     {
          //       description: this.product.description,
          //       amount: {
          //         currency_code: 'USD',
          //         value: this.amount
          //       }
          //     }
          //   ]
          // }); 
          // 
        },
        onApprove: async (data, orderDetails) => {  

          const loading = await loadingController.create({
            message: 'Realizando Deposito',
            spinner: 'crescent',
            showBackdrop: true
        });
  
        loading.present();
 

          this.orderToken = new ConfirmOrder();
          this.orderToken.orderToken = data.orderID;
          
          this.paypalService.confirmOrder(this.orderToken).then(response =>{
            loading.dismiss();
            this.router.navigate(['/paypalOrder/successfull'],{state: {data: {response}}});
        });  
          this.paidFor = true; 
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
    }
  product = { 
    price: this.amount,
    description: 'Alcancia Service',
    img: '../../../../assets/Alcancía White.png'
  };

  async toast(message, status) {

    const toast = await this.toastr.create({
       message: message,
       position: 'top',
       color: status,
       duration: 2000
    });
 
    toast.present();
   }
}
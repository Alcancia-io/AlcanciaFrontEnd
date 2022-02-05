import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {PaypalService} from 'src/app/services/paypal.service';
import { Router } from '@angular/router';
import { ConfirmOrder } from 'src/app/models/paypalOrder';
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
    private router: Router
    ) { }
  
   orderToken: ConfirmOrder;
  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {   
           console.log('aqui  servicio de Roger');
          const orderDetails = actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.amount
                }
              }
            ]
          }); 
          return orderDetails;
          
        },
        onApprove: async (data, orderDetails) => {  
          await new Promise(r => setTimeout(r, 2000));

          this.orderToken = new ConfirmOrder();
          this.orderToken.orderToken = data.orderID;
          
          this.paypalService.confirmOrder(this.orderToken).then(response =>{
            
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
}
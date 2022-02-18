import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaypalpaymentoptionsPage } from './paypalpaymentoptions.page';

describe('PaypalpaymentoptionsPage', () => {
  let component: PaypalpaymentoptionsPage;
  let fixture: ComponentFixture<PaypalpaymentoptionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalpaymentoptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaypalpaymentoptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

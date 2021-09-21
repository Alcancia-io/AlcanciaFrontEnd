import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { StorageService } from '../services/storage.service';
 
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
 

 constructor(private router: Router, private storageService: StorageService) {

 }
 
  ngOnInit() {
  }
 
  next() {
    this.slides.slideNext();
  }
 
  async start() {
    await this.storageService.addIntroData({key: INTRO_KEY, value: 'true'}, INTRO_KEY);
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.page.html',
  styleUrls: ['./whitepaper.page.scss'],
})
export class WhitepaperPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    var myPdfUrl = '../assets/whitepaper-alcancía.pdf'  
    window.open(myPdfUrl); 
    this.router.navigate(['']);
  }
  
}

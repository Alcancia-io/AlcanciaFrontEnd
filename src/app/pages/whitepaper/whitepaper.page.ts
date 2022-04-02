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
    this.openInNewTab('https://firebasestorage.googleapis.com/v0/b/alcancia.appspot.com/o/Whitepaper%20-%20Alcanci%CC%81a.io.pdf?alt=media&token=45f0f4e5-e98f-4c29-be7d-f9f6ed1cac5b');
    this.router.navigate(['']);
  }
  
  openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      href: href,
    }).click();
  }
}

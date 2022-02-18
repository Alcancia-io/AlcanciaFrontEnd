import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})

export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Menu Principal',
      link: '/nav/home',
      icon: 'home-outline'
    },
    {
      name: 'Movimientos',
      link: '/nav/transaction',
      icon: 'swap-horizontal-outline'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() { }

}
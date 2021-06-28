import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-bookings',
  templateUrl: './home-bookings.page.html',
  styleUrls: ['./home-bookings.page.scss'],
})
export class HomeBookingsPage implements OnInit {
  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  ngOnInit() {}
  async logout() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['login']);
  }
}

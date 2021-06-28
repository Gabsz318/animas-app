import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-bookings',
  templateUrl: './home-bookings.page.html',
  styleUrls: ['./home-bookings.page.scss'],
})
export class HomeBookingsPage implements OnInit {
  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  ngOnInit() {}
  async logout() {
    await this.angularFireAuth.signOut();
  }
}

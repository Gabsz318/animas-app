import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CabinStatus } from '../cabin/cabin-status';

@Component({
  selector: 'app-home-bookings',
  templateUrl: './home-bookings.page.html',
  styleUrls: ['./home-bookings.page.scss'],
})
export class HomeBookingsPage implements OnInit {
  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private ngFirestore: AngularFirestore,
    private readonly router: Router
  ) {}

  user: any;
  cabinsOccupated: any;

  async ngOnInit() {
    this.angularFireAuth.authState.subscribe((authState) => {
      this.user = authState.email
        .replace('@captura.com', '')
        .replace(/^\w/, (c) => c.toUpperCase());
    });
    this.ngFirestore
      .collection('cabins')
      .snapshotChanges()
      .subscribe((d) => {
        console.log(d);
        this.cabinsOccupated = d.filter(
          (d: any) => d.payload.doc.data().status === CabinStatus.Reservada
        ).length;
      });
  }

  async logout() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['login']);
  }

  addBooking() {
    this.router.navigate(['bookings/booking-form']);
  }

  addCabin() {
    this.router.navigate(['cabins/cabin-form']);
  }
}

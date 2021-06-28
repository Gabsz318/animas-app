import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Cabin } from '../cabin/cabin-form/cabin';
import { Client } from '../clients/client-form/client';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  bookings: any;

  async ngOnInit() {
    let clients: Client[];
    let cabins: Cabin[];
    this.ngFirestore
      .collection('cabins')
      .snapshotChanges()
      .subscribe(
        (d) =>
          (cabins = d.map((t) => ({
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as any),
          })))
      );
    this.ngFirestore
      .collection('clients')
      .snapshotChanges()
      .subscribe(
        (d) =>
          (clients = d.map((t) => ({
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as any),
          })))
      );
    this.ngFirestore
      .collection('bookings')
      .snapshotChanges()
      .subscribe((d) => {
        console.log(cabins, clients);
        this.bookings = d.map((t: any) => ({
          id: t.payload.doc.id,
          cabinName: cabins.find(d => d.$key === t.payload.doc.data().cabin_id),
          clientName: clients.find(d => d.$key === t.payload.doc.data().client_id),
          formattedStartDate: new Date(t.payload.doc.data().start_date).toLocaleDateString(),
          formattedEndDate: new Date(t.payload.doc.data().end_date).toLocaleDateString(),
          ...(t.payload.doc.data() as any),
        }));
      });
  }

  addBooking() {
    this.router.navigate(['bookings/booking-form']);
  }

  async logout() {
    await this.angularFireAuth.signOut();
  }

  editBooking(bookingId: string) {
    this.router.navigate([`bookings/booking-form/${bookingId}`]);
  }
}

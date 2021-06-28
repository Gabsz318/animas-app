import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {
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
        .replace('@admin.com', '')
        .replace(/^\w/, (c) => c.toUpperCase());
    });
    this.cabinsOccupated = (
      await this.ngFirestore.collection('cabins').snapshotChanges().toPromise()
    )?.length;
    console.log(this.cabinsOccupated);
  }

  async logout() {
    await this.angularFireAuth.signOut();
  }

  addBooking() {
    this.router.navigate(['bookings/booking-form']);
  }

  addCabin() {
    this.router.navigate(['cabins/cabin-form']);
  }
}

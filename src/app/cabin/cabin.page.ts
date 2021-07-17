import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CabinStatus } from './cabin-status';
import * as _ from 'lodash';

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.page.html',
  styleUrls: ['./cabin.page.scss'],
})
export class CabinPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  cabins: any;
  CabinStatus = CabinStatus;
  status = {
    0: {
      icon: 'checkmark-circle',
      color: 'green',
    },
    1: {
      icon: 'lock-closed',
      color: 'red',
    },
    2: {
      icon: 'bookmarks',
      color: 'orange',
    },
  };

  async ngOnInit() {
    this.ngFirestore
      .collection('cabins')
      .snapshotChanges()
      .subscribe((d) => {
        const cabins = d.map((t) => ({
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as any),
        }));
        this.cabins = _.orderBy(cabins, 'cabin_name', 'asc');
      });
  }

  addCabin() {
    this.router.navigate(['cabins/cabin-form']);
  }

  async logout() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['login']);
  }

  editCabin(cabinId: string) {
    this.router.navigate([`cabins/cabin-form/${cabinId}`]);
  }
}

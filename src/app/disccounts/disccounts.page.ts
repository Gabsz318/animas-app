import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-disccounts',
  templateUrl: './disccounts.page.html',
  styleUrls: ['./disccounts.page.scss'],
})
export class DisccountsPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  disccounts: any[];
  status = {
    Activa: {
      icon: 'checkmark-circle',
      color: 'green',
    },
    Caducada: {
      icon: 'lock-closed',
      color: 'red',
    },
  };

  ngOnInit() {
    this.ngFirestore
      .collection('disccounts')
      .snapshotChanges()
      .subscribe((d) => {
        const disccounts = d.map((t) => ({
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as any),
        }));
        this.disccounts = _.orderBy(disccounts, 'percentage', 'asc');
      });
  }
  createCabin() {
    this.router.navigate(['disccounts/disccount-form']);
  }

  editCabin(disccountId: string) {
    this.router.navigate([`disccount/disccount-form/${disccountId}`]);
  }

  async logout() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['login']);
  }
}

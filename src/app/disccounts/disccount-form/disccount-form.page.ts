import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Disccount } from './disccount';
import { disccountFields } from './disccount-fields';

@Component({
  selector: 'app-disccount-form',
  templateUrl: './disccount-form.page.html',
  styleUrls: ['./disccount-form.page.scss'],
})
export class DisccountFormPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  disccountFields = disccountFields;
  disccountId: string;
  disccount: Disccount = {
    percentage: 0,
    start_date: new Date(),
    end_date: new Date(),
    status: 'Disponible',
  };
  missingFields;
  tokenId: string;
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
    this.disccountId = this.route.snapshot.params.disccountId;
    if (this.disccountId) {
      this.ngFirestore
        .collection('disccounts')
        .doc(this.disccountId)
        .valueChanges()
        .subscribe((d) => (this.disccount = d as Disccount));
    }
  }

  save() {
    if (!this.disccountId) {
      this.ngFirestore.collection('disccounts').add(this.disccount);
      this.router.navigate(['disccounts']);
    } else {
      this.ngFirestore
        .collection('disccounts')
        .doc(this.disccountId)
        .update(this.disccount)
        .then(() => {
          this.router.navigate(['disccounts']);
        })
        .catch((error) => console.log(error));
    }
  }

  delete() {
    this.ngFirestore.doc('disccounts/' + this.disccountId).delete();
    this.router.navigate(['disccounts']);
  }
}

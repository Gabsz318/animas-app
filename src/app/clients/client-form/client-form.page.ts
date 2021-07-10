import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { clientFields } from './client-fields';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
})
export class ClientFormPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  clientFields = clientFields;
  clientId: string;
  client: Client = {
    name: '',
    telphone: '',
    address: '',
    email: '',
  };
  missingFields;
  isBookingUser: boolean;

   ngOnInit() {
    this.angularFireAuth.authState.subscribe(
      (authState) =>
        (this.isBookingUser = authState.email.endsWith('@captura.com'))
    );
    this.clientId = this.route.snapshot.params.clientId;
    if (this.clientId) {
      this.ngFirestore
        .collection('clients')
        .doc(this.clientId)
        .valueChanges()
        .subscribe((d) => (this.client = d as Client));
    }
  }

  save() {
    if (!this.clientId) {
      this.ngFirestore.collection('clients').add(this.client);
      
      this.router.navigate(['clients']);
    } else {
      this.ngFirestore
        .collection('clients')
        .doc(this.clientId)
        .update(this.client)
        .then(() => {
          this.router.navigate(['clients']);
        })
        .catch((error) => console.log(error));
    }
  }

  delete() {
    this.ngFirestore.doc('clients/' + this.clientId).delete();
    this.router.navigate(['clients']);
  }
}

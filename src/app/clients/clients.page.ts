import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Client } from './client-form/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  clients: any[];

  ngOnInit() {
    this.ngFirestore
    .collection('clients')
    .snapshotChanges()
    .subscribe(
      (d) =>
        (this.clients = d.map((t) => ({
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as any),
        })))
    );
  }
  createCabin() {
    this.router.navigate(['clients/client-form']);
  }

  editCabin(clientId: string) {
    this.router.navigate([`clients/client-form/${clientId}`]);
  }

  async logout() {
    await this.angularFireAuth.signOut();
  }
}
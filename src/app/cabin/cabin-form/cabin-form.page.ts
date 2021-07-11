import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { CabinStatus } from '../cabin-status';
import { Cabin } from './cabin';
import { cabinFields } from './cabin-fields';

@Component({
  selector: 'app-cabin-form',
  templateUrl: './cabin-form.page.html',
  styleUrls: ['./cabin-form.page.scss'],
})
export class CabinFormPage implements OnInit {
  constructor(
    private readonly ngFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  cabinId: string;
  cabin: Cabin = {
    cabin_name: '1',
    quantity_persons: 0,
    matrimonial_bed_quantity: 0,
    king_size_quantity: 0,
    individual_quantity: 0,
    bath_quantity: 0,
    chicken_quantity: 0,
    living_room_quantity: 0,
    price: 0,
    plants_quantity: 0,
    status: CabinStatus.Disponible,
  };
  cabinFields = cabinFields;

  ngOnInit() {
    this.cabinId = this.route.snapshot.params.cabinId;
    if (this.cabinId) {
      this.ngFirestore
        .collection('cabins')
        .doc(this.cabinId)
        .valueChanges()
        .subscribe((d) => {
          this.cabin = d as Cabin;
        });
    }
  }

  addCabin() {
    this.ngFirestore.collection('cabins').add(this.cabin);
    this.router.navigate(['cabins']);
  }

  editCabin() {
    this.ngFirestore
      .collection('cabins')
      .doc(this.cabinId)
      .update(this.cabin)
      .then(() => {
        this.router.navigate(['cabins']);
      })
      .catch((error) => console.log(error));
  }

  delete() {
    this.ngFirestore.doc('cabins/' + this.cabinId).delete();
    this.router.navigate(['cabins']);
  }
}

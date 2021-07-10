import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Booking } from './booking';
import { bookingFields } from './booking-fields';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { CabinStatus } from 'src/app/cabin/cabin-status';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cabin } from 'src/app/cabin/cabin-form/cabin';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {
  @ViewChild('imageElement', { static: false })
  private imageElement: ElementRef;
  @ViewChild('imgUpload', { static: false }) private imgUpload: ElementRef;

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly ngFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  bookingFields = bookingFields;
  bookingId: string;
  booking: Booking = {
    client_id: 1,
    start_date: '',
    end_date: '',
    cabin_id: '',
    extra_persons_quantity: 0,
    disccount_id: 1,
    total: 0,
    voucher: null,
    notes: '',
    nights_quantity: 0,
    status: 'Pendiente',
  };
  missingFields;
  cabins: any[];
  tokenId: string;
  status = {
    Pagado: {
      icon: 'checkmark-circle',
      color: 'green',
    },
    Finalizada: {
      icon: 'information-circle',
      color: 'info',
    },
    Pendiente: {
      icon: 'timer',
      color: 'orange',
    },
  };
  isBookingUser: boolean;

   ngOnInit() {
    this.angularFireAuth.authState.subscribe(
      (authState) =>
        (this.isBookingUser = authState.email.endsWith('@captura.com'))
    );
    this.bookingId = this.route.snapshot.params.bookingId;
    if (this.bookingId) {
      this.ngFirestore
        .collection('bookings')
        .doc(this.bookingId)
        .valueChanges()
        .subscribe((d) => {
          this.booking = d as Booking;
        });
    }
    this.loadData();
  }

  async delete() {
    this.ngFirestore.doc('bookings/' + this.bookingId).delete();
    const currentCabin = this.cabins.find(c => c.id === this.booking.cabin_id);
    currentCabin.status = CabinStatus.Disponible;
    await this.ngFirestore
    .collection('cabins')
    .doc(this.booking.cabin_id)
    .update(currentCabin);
    this.router.navigate(['bookings']);
  }

  async loadData() {
    this.ngFirestore
      .collection('clients')
      .snapshotChanges()
      .subscribe((d: any[]) => {
        this.bookingFields.find((f) => f.fieldName === 'client_id').options =
          d.map((c) => ({
            value: c.payload.doc.id,
            label: c.payload.doc.data().name,
          }));
      });

    this.ngFirestore
      .collection('cabins')
      .snapshotChanges()
      .subscribe((d: any[]) => {
        this.cabins = d.map((c) => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data(),
        }));
        this.bookingFields.find((f) => f.fieldName === 'cabin_id').options =
          this.cabins
            .filter((f) => f.status === CabinStatus.Disponible)
            .map((d) => ({
              value: d.id,
              label: d.cabin_name,
              price: d.price,
              status: d.status,
            }));
        this.calculateTotal();
      });

    this.ngFirestore
      .collection('disccounts')
      .snapshotChanges()
      .subscribe((d: any[]) => {
        this.bookingFields.find((f) => f.fieldName === 'disccount_id').options =
          d
            .filter((f) => new Date(f.payload.doc.data().end_date) > new Date())
            .map((c) => ({
              value: c.payload.doc.id,
              label: `${c.payload.doc.data().percentage} %`,
              percentage: c.payload.doc.data().percentage,
            }));
        this.calculateTotal();
      });
  }

  async save() {
    const requiredFields = this.bookingFields
      .filter((f) => f.required)
      .map((f) => ({ fieldName: f.fieldName, label: f.label }));
    this.missingFields = [];
    requiredFields.forEach((f) => {
      if (!this.booking[f.fieldName]) {
        this.missingFields.push(f.label);
      }
    });
    if (this.missingFields.length) {
      return;
    }
    this.booking.start_date = this.removeDateCharacters(
      this.booking.start_date
    );
    this.booking.end_date = this.removeDateCharacters(this.booking.end_date);
    const fields = Object.keys(this.booking) as string[];
    const data = Object.values(this.booking) as string[];
    if (this.bookingId) {
      await this.ngFirestore
        .collection('bookings')
        .doc(this.bookingId)
        .update(this.booking);
    } else {
      this.ngFirestore.collection('bookings').add(this.booking);
    }
    this.cabins.find((d) => d.id === this.booking.cabin_id)['status'] = this
      .booking.voucher
      ? CabinStatus.Reservada
      : CabinStatus.Reservando;
    const cabinUpdate = this.cabins.find((d) => d.id === this.booking.cabin_id);
    await this.ngFirestore
      .collection('cabins')
      .doc(this.booking.cabin_id)
      .update(cabinUpdate);
    this.router.navigate(['bookings']);
  }

  openModal(img) {
    console.log(img);
  }

  async takeVoucher() {
    const platform = (await Device.getInfo()).operatingSystem;
    let image;
    if (platform === 'windows') {
      this.imgUpload.nativeElement.click();
      return;
    }
    try {
      image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      console.log('IMAGEN_64',image.base64String)
      if (!image.base64String) {
        return;
      }
      // Can be set to the src of an image now
      this.booking.voucher = `data:image/png;base64,${image.base64String}`;
      this.booking.status = 'Pagado';
    } catch (error) {
      console.error(error);
    }
  }

  onChange(args) {
    if (args.target.max && args.target.max < args.target.value) {
      this.booking[args.target.name] = args.target.max;
    }

    this.calculateTotal();
  }

  onSelectChange() {
    this.calculateTotal();
  }

  removeDateCharacters(date: string) {
    if (!date) {
      return '';
    }
    date = new Date(date).toISOString();
    date = date.replace('T', ' ');
    date = date.replace('Z', '');
    return date;
  }

  calculateTotal() {
    if (
      this.booking.cabin_id &&
      this.bookingFields.find((f) => f.fieldName === 'cabin_id').options.length
    ) {
      this.booking.total =
        this.bookingFields
          .find((f) => f.fieldName === 'cabin_id')
          .options.find((o) => o.value === this.booking.cabin_id).price *
        this.booking.nights_quantity;
    }
    if (this.booking.extra_persons_quantity) {
      this.booking.total =
        this.booking.total +
        this.booking.extra_persons_quantity *
          this.booking.nights_quantity *
          300;
    }
    if (
      this.booking.disccount_id &&
      this.bookingFields.find((f) => f.fieldName === 'disccount_id').options
        .length
    ) {
      this.booking.total =
        this.booking.total -
        (this.booking.total / 100) *
          this.bookingFields
            .find((f) => f.fieldName === 'disccount_id')
            .options.find((o) => o.value === this.booking.disccount_id)
            .percentage;
    }
  }

  dateChange() {
    this.booking.nights_quantity = moment(this.booking.end_date).diff(
      moment(this.booking.start_date),
      'days'
    );
    this.calculateTotal();
  }

  onChangeImage(args) {
    this.getBase64(args.target.files[0]);
  }

  async getBase64(file) {
    const platform = (await Device.getInfo()).operatingSystem;
    if (platform !== 'windows') {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.booking.voucher = reader.result;
      this.booking.status = 'Pagado';
    };
    reader.onerror = (error) => console.log('Error: ', error);
  }
}

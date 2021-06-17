import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {
  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  user: any;
  cabinsOccupated: number = 12;

  async ngOnInit() {
    this.angularFireAuth.authState.subscribe(authState => {
      this.user = authState.email.replace('@admin.com', '').replace(/^\w/, (c) => c.toUpperCase());
    });
  }

  async logout() {
   await this.angularFireAuth.signOut();
  }
}

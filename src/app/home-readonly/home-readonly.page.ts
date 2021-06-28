import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-readonly',
  templateUrl: './home-readonly.page.html',
  styleUrls: ['./home-readonly.page.scss'],
})
export class HomeReadonlyPage implements OnInit {
  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  ngOnInit() {}
  async logout() {
    await this.angularFireAuth.signOut();
  }
}

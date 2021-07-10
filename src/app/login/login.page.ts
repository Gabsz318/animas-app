import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly loadingController: LoadingController,
    private readonly router: Router
  ) {}

  error: string;
  username: string;
  password: string;

  async login() {
    const loader = await this.loadingController.create({
      message: 'Por favor espera...',
    });
    await loader.present();
    this.angularFireAuth
      .signInWithEmailAndPassword(this.username, this.password)
      .then(async (u) => {
        this.error = null;
        await loader.dismiss();
        if(u.user.email.endsWith('@captura.com')) {
          this.router.navigate(['home-bookings']);
        } else {
          this.router.navigate(['home-admin']);
        }
      })
      .catch(async (error) => {
        this.error = error;
        await loader.dismiss();
      });
  }
}

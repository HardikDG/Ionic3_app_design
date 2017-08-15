import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, I think I like it',
      duration: 2000,
      position: position
    })

    toast.present(toast);
  }

}

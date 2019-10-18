import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('tabs');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    this.navCtrl.navigateRoot('goals');
  }
}

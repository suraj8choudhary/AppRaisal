import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('user-details');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    this.navCtrl.navigateRoot('goals');
  }

}

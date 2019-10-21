import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals1',
  templateUrl: './goals1.page.html',
  styleUrls: ['./goals1.page.scss'],
})
export class Goals1Page implements OnInit {
public Estimation : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
  this.Estimation = formBuilder.group({
    Status:[''],
    Description:[''],
    Jira:[''],
    Crucible:[''],
    });
  }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('user-details');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.Estimation.value);
    this.navCtrl.navigateRoot('goals2');
  }

}

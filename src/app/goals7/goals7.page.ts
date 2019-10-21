import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-goals7',
  templateUrl: './goals7.page.html',
  styleUrls: ['./goals7.page.scss'],
})
export class Goals7Page implements OnInit {
public TU : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.TU = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
    });
   }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals6');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.TU.value);
    this.navCtrl.navigateRoot('goals8');
  }
}

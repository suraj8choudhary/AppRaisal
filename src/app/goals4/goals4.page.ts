import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-goals4',
  templateUrl: './goals4.page.html',
  styleUrls: ['./goals4.page.scss'],
})
export class Goals4Page implements OnInit {
public Ownership : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.Ownership = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
    });
  }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals3');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.Ownership.value);
    this.navCtrl.navigateRoot('goals5');
  }
}

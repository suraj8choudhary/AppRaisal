import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals3',
  templateUrl: './goals3.page.html',
  styleUrls: ['./goals3.page.scss'],
})
export class Goals3Page implements OnInit {
  public IC : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.IC = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
      })
      ;}

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals2');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.IC.value);
    this.navCtrl.navigateRoot('goals4');
  }

}

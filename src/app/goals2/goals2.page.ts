import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals2',
  templateUrl: './goals2.page.html',
  styleUrls: ['./goals2.page.scss'],
})
export class Goals2Page implements OnInit {
public CT : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.CT = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
      });
    }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals1');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.CT.value);
    this.navCtrl.navigateRoot('goals3');
  }

}

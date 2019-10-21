import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals5',
  templateUrl: './goals5.page.html',
  styleUrls: ['./goals5.page.scss'],
})
export class Goals5Page implements OnInit {
public PC : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.PC = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
    });
  }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals4');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.PC.value);
    this.navCtrl.navigateRoot('goals6');
  }

}

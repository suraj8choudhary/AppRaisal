import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals8',
  templateUrl: './goals8.page.html',
  styleUrls: ['./goals8.page.scss'],
})
export class Goals8Page implements OnInit {
public Testing : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.Testing = formBuilder.group({
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
    console.log(this.Testing.value);
    this.navCtrl.navigateRoot('selfreview');
  }
}

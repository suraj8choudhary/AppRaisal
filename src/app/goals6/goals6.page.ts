import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals6',
  templateUrl: './goals6.page.html',
  styleUrls: ['./goals6.page.scss'],
})
export class Goals6Page implements OnInit {
public Quality : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.Quality = formBuilder.group({
      Status:[''],
      Description:[''],
      Jira:[''],
      Crucible:[''],
    });
  }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals5');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    console.log(this.Quality.value);
    this.navCtrl.navigateRoot('goals7');
  }

}

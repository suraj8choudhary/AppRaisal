import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-selfreview',
  templateUrl: './selfreview.page.html',
  styleUrls: ['./selfreview.page.scss'],
})
export class SelfreviewPage implements OnInit {
public selfreview : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
    this.selfreview = formBuilder.group({
      Learnings:[''],
      ImprovementArea:[''],
      Success:[''],
    });
  }

  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('goals8');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  submit(){
    console.log(this.selfreview.value);
    this.navCtrl.navigateRoot('');
  }
  save(){
    console.log(this.selfreview.value);
    this.navCtrl.navigateRoot('');
  }
}

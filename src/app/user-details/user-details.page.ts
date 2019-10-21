import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  public myform : FormGroup;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder) {
  this.myform = formBuilder.group({
  AssociateID:['',Validators.required],
  MailId:['',Validators.pattern(".+\@.+\..")],
  Quarter:['',Validators.required],
  Year:['',Validators.required],
  Team:['',Validators.required],
});
  }
  ngOnInit() {
  }
  previous(){
    this.navCtrl.navigateRoot('tabs');
  }
  cancel(){
    this.navCtrl.navigateRoot('tabs');
  }
  next(){
    if(!this.myform.valid)
    {
      this.navCtrl.navigateRoot('user-details');
    }
    else{
    console.log(this.myform.value);
    this.navCtrl.navigateRoot('goals1');
  }
  }
}

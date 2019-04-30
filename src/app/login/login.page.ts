import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { HeaderService } from '../services/header/header.service';
import { HttpHeaders} from '@angular/common/http';

export class LoginDetails {
  url : string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  public loginDetails: LoginDetails;

  data:any;
  loginData = {};
     
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder, 
    private authservice : AuthService,
    private Headerservice : HeaderService, 
  ) {
    this.loginDetails = new LoginDetails();
  }
  
  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'url': [null, Validators.compose([
        Validators.required
      ])],
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  authorizeLogin() {

    let options = this.Headerservice.callHeader();  
    // let headers = new HttpHeaders();     
    // headers.append('Content-Type' ,'application/x-www-form-urlencoded;charset=UTF-8 ');
    // headers.append('Content-Type','Access-Control-Allow-Origin:*');
  
    // let options= {
    //   headers: headers
    // };  

    this.authservice.login(this.loginData,options).then((result) => {      
      this.data = result;
      console.log('testdata'+ this.data);
      this.navCtrl.navigateRoot('/home');
    },(err) => {
      console.log(err);     
    });
  }
}

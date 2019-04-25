import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

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

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private http: HttpClient
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
  
  authorizeLogin() {

    console.log(this.loginDetails);
    console.log(this.loginDetails.username);
    console.log(this.loginDetails.password);
    let httpHeaders = new HttpHeaders({
          'Content-Type' :'application/x-www-form-urlencoded;charset=UTF-8'
        });    

         let options = {
          headers: httpHeaders
         };   

    return this.http.post('http://fortesting.biztechnosys.com/modules/Mobile/api.php',{_operation:'login',username:'admin',password:'admin'},options).subscribe((res : any[])=>{
      console.log(res);
    });
    this.navCtrl.navigateRoot('/home');
  }

}

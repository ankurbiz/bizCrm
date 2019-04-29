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
  
    let headers = new HttpHeaders();     
    headers.append('Content-Type' ,'application/x-www-form-urlencoded;charset=UTF-8 ');
    headers.append('Content-Type','Access-Control-Allow-Origin:*');

    let loginData = {_operation:'login', username:'admin', password:'admin'};
    let options = {
      headers: headers
    };       

    return new Promise((resolve, reject) => {

    var formdata = new FormData();
    formdata.append('_operation','login');
    formdata.append('username','admin');
    formdata.append('password','admin');
  
    this.http.post('http://localhost/test/modules/Mobile/api.php', formdata, options)
        .subscribe(data => {         
          console.log(data);
          data = Array.of(data); 
          console.log(data);          
          //localStorage.setItem('user',data);
          this.navCtrl.navigateRoot('/home');
        }, (err) => {          
          reject("Invalid Username OR Password!!!");
          console.log(err);          
        });
    });
  
    
  }

}

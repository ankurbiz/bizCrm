import { Component,OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { HomeService } from '../services/home/home.service';
import { HeaderService } from '../services/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data : any;
  modules: [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl :LoadingController,
    private homeService : HomeService,
    private headerservice : HeaderService, 
  ) {      
 }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {    

    var loginData = JSON.parse(localStorage.getItem('logindata'));
    var session = localStorage.getItem('session');

    let options = this.headerservice.callHeader(); 
    var getServiceData = {
      'url' : loginData.url,
      'username' : loginData.username,
      'password' : loginData.password,
      'session' : session
    };

    this.homeService.getModuleList(getServiceData,options).subscribe(res => {     
      this.data = res;  
      if(this.data.success === true ){ 
        this.modules = this.data.result.modules;        
        return this.modules;
      }else{
        console.log('Something Problem...');
      }      
    },(err) => {       
       console.log(err);   
    });
  }

}

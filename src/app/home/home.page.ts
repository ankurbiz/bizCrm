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
    let options = this.headerservice.callHeader();   

    var getServiceData = {
          'url' : 'http://localhost/test',
          'username' : 'superadmin',
          'password' : 'admin',
          'session' : '62595cc84b1b42b75'
    };
    

    this.homeService.getModuleList(getServiceData,options).subscribe(res => {     
      this.data = res;     
      console.log(this.data);
    },(err) => {       
       console.log(err);   
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { ModuleService } from '../services/module/module.service';
import { HeaderService } from '../services/header/header.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  data : any;
  modules = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl :LoadingController,
    private moduleService : ModuleService,
    private headerservice : HeaderService, 
  ) { }
  
  ngOnInit() {
    this.contactList();
  }

  contactList(){
    
      var loginData = JSON.parse(localStorage.getItem('logindata'));
      var session = localStorage.getItem('session');
      let options = this.headerservice.callHeader(); 
      var getServiceData = {
        'url' : loginData.url,        
        'session' : session,
        'module' : 'Contacts'
      };

      this.moduleService.getModuleRecordList(getServiceData,options).subscribe(res => {     
        this.data = res;    
        console.log(this.data);       
        if(this.data.success === true){ 
          this.modules = this.data.result.records;          
          return this.modules;
        }else{
          console.log(this.data.result.error);
        }
      },(err) => {       
        console.log(err);   
      });
  }

  getrecordDetail(id){
      alert(id);
  }

}

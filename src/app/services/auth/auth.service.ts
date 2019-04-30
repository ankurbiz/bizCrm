import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(
    private http: HttpClient
  ) { }

  data:any;
  result:any;

  login(logindata,options){

    return new Promise((_resolve, reject) => {

    var formdata = new FormData();
    formdata.append('_operation','login');
    formdata.append('username',logindata.username);
    formdata.append('password',logindata.password);
  
    this.http.post(logindata.url + '/modules/Mobile/api.php', formdata, options)
        .subscribe(res => {         
          this.data = {status : true,result:res}
        }, (err) => {          
          this.data = {status : false,result:null}
        });
    }); 
  }

}

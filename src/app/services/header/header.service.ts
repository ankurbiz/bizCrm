import { Injectable } from '@angular/core';
import { HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {  
  constructor() {}
  callHeader(){    
    let headers = new HttpHeaders();     
    headers.append('Content-Type' ,'application/x-www-form-urlencoded;charset=UTF-8');
    headers.append('Content-Type','Access-Control-Allow-Origin:*');
    return {
      headers: headers
    };  
 }

}

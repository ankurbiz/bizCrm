import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(
    private http: HttpClient
  ) { }

  data:any;
  result:any;
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  login(logindata,options): Observable<any> {
    
    var formdata = new FormData();
    formdata.append('_operation','login');
    formdata.append('username',logindata.username);
    formdata.append('password',logindata.password);

    return this.http.post<any>(logindata.url + '/modules/Mobile/api.php', formdata, options).pipe(
      tap((logindata: any) => console.log(`logindata`)),
      catchError(this.handleError<any>('login'))
    );  
  } 
}

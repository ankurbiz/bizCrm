import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map, } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }
   
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }

  getModuleList(moduledata,options): Observable<any> {
    var formdata = new FormData();
    formdata.append('_operation','loginAndFetchModules');
    formdata.append('username',moduledata.username);
    formdata.append('password',moduledata.password);
  
    return this.http.post<any>(moduledata.url + '/modules/Mobile/api.php', formdata, options).pipe(
      tap((logindata: any) => console.log(`moduledata`)),
      catchError(this.handleError<any>('module'))
    );
  } 

}

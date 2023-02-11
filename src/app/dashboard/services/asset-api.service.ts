import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asset } from 'src/app/interfaces/asset';
import { ErrorObject, ApiError } from 'src/app/interfaces/error';

@Injectable({
  providedIn: 'root'
})

export class AssetApiService {
  endPoint: string = 'https://adb47d56-1aa9-4aa7-8ec2-77a923b80a5b.mock.pstmn.io/';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getData(): Observable<Asset[]> {
    return this.httpClient.get<any>(this.endPoint + '/targetasset')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError (error: ErrorObject){
    let msg = '';
    let err: ApiError = error.error.error;
    // if(error.error instanceof ErrorEvent) {
    //   // client side error
    // } else {
    //   // server side error
    // }
    console.log(err.message);
    return throwError(err.name);
  }
}
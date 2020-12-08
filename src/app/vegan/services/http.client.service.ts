import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpClientService{

    constructor(private http:HttpClient){}

    public get(url: string, ...params: any[]) : Observable<any>{
        url = params ? this.assignParams(url, params) : url;
        return this.http.get(url).pipe(catchError(this.handlerError));
    }
    
    public post(url:string, params:any[], body? : any) : Observable<any>{
        url = params ? this.assignParams(url, params) : url;
        return this.http.post(url,body);
    }

    public assignParams(url : string, params:any[]):string{
        params.forEach((param, index)=>{
            url = url.replace('{' +index+ '}', param === null || param === undefined ? '' : param);
        });
        return url;
    }

    private handlerError(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
}
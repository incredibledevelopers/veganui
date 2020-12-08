import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class CategorySharedService{
    private subject = new Subject<any>();

    constructor(){}

    sendItemCategory(id : string){
        this.subject.next(id);
    }

    getItemCategory(): Observable<any>{
        return this.subject.asObservable();
    }
}
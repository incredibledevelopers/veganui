import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

export abstract class BasePageComponent{
    constructor(private baseTitle : Title){
        baseTitle.setTitle(environment.appTitle);
    }

    public setTitle(title : string){
        if(title){
            title += ' | ';
            this.baseTitle.setTitle(title + environment.appTitle);
        }
    }
}
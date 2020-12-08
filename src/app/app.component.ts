import {Component} from '@angular/core';
import {VeganService} from "./vegan/services/VeganService";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [VeganService]
})
export class AppComponent {

}

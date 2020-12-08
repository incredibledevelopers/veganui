import { Component, OnInit } from '@angular/core';
import { VEGAN_SETUP } from '../models/vegan-setup.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactMessage = VEGAN_SETUP.contactMessage;
  contactNumbers = VEGAN_SETUP.contactNumbers;
  
  constructor() { }

  ngOnInit() {
  }

}

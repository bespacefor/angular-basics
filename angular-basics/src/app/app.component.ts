import { Component } from '@angular/core';
import {MySimpleServiceService} from "./services/my-simple-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public mySimpleServiceService: MySimpleServiceService) {}
  title = 'Angular Task';
}

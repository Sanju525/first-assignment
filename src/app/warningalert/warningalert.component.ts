import {Component} from "@angular/core";


@Component({
  selector: 'warning-alert',
  templateUrl: 'warningalert.component.html',
  styles:[
    `
    p {
      color: red;
      padding: 10px;
      border: 2px solid red;
      background-color: mistyrose;
    }
    `]
})

export class WarningalertComponent {

}

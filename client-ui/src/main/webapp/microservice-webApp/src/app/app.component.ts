import {Component, OnInit} from '@angular/core';
import {ActuatorService} from "./modules/shared/services/actuator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private actuatorService: ActuatorService) {
  }

  ngOnInit(): void {
    // this.actuatorService.refreshProperties().subscribe(data => {
    //   console.log('#1\n Properties refreshed: ', data);
    // })
  }
}

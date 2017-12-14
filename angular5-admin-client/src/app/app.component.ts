import { Component,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenavModule;
  

  title = 'app';
  mode = new FormControl('side');

}

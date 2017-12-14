import { Component,ViewChild,OnInit,HostListener } from '@angular/core';
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
  navOpened:boolean = true;
  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navOpened = false;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navOpened = false;
        }
        if (event.target.innerWidth > 768) {
           this.navOpened = true;
        }
    }

}

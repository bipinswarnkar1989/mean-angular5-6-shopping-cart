import { Component,ViewChild,OnInit,HostListener } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenavModule;

  isLoggedIn:boolean = false;
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

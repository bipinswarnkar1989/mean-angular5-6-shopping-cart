import { Component,ViewChild,OnInit,HostListener } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

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

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navOpened = false;
    }
    this.auth.checkDashAuthentication();
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

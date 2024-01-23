import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AuthService} from "./modules/authentication/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'DigiFrei';
  titleService = inject(Title)
  authService = inject(AuthService)
  router = inject(Router)

  async ngOnInit() {
    this.titleService.setTitle(this.title)

    if (this.authService.isLoggedOut()) {
      await this.router.navigate(['/login'])
    }
  }
}

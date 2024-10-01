import { Component, inject } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  private router = inject(Router);

  goTo(path: string) {
    this.router.navigate([path])
  }
}

import { Component } from '@angular/core';
import { SideBarComponent } from './core/components/side-bar/side-bar.component';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

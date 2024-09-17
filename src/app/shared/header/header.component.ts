import { Component } from '@angular/core';
import { TITLE } from '../../config/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public title = TITLE;
}

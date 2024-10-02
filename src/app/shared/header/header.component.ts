import { Component, Input } from '@angular/core';
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
  @Input() categories: string[] = [];
  colorClasses: string[] = ['btn btn-sm btn-primary','btn btn-sm btn-secondary','btn btn-sm btn-success','btn btn-sm btn-danger'];
}

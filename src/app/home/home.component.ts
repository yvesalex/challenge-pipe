import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DEFAULT_COLOR, ERROR_MESSAGE, TITLE } from '../config/constants';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = TITLE;
  defaultColor: string = DEFAULT_COLOR;
  error: string = '';
  
}

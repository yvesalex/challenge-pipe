import { Component, ElementRef, EventEmitter, HostListener, input, Input, OnChanges, Output, SimpleChange, SimpleChanges, viewChildren } from '@angular/core';
import { ColorModel } from '../models/color.model';
import { fromEvent } from 'rxjs';
import { DraggingDirective } from '../directives/drag.directive';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [DraggingDirective],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.scss'
})
export class RectangleComponent implements OnChanges {
  applyBackgroundColor = input<ColorModel | undefined>();
  rectangle = viewChildren<ElementRef>("rectangle");

  ngOnChanges(changes: SimpleChanges): void {
    this.rectangle()[0].nativeElement.style.backgroundColor = changes['applyBackgroundColor'].currentValue.value;
  }
}

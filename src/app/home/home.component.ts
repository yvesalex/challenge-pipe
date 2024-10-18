import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DEFAULT_COLOR, ERROR_MESSAGE, TITLE } from '../config/constants';
import { RectangleComponent } from "../rectangle/rectangle.component";
import { ColorModel } from '../models/color.model';
import { ColorService } from '../services/colors.service';
import { NgStyle } from '@angular/common';
import { DraggingDirective } from '../directives/drag.directive';
import { EventModel } from '../models/state.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RectangleComponent, DraggingDirective, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = TITLE;
  defaultColor: string = DEFAULT_COLOR;
  error: string = '';
  selectedColor = signal<ColorModel>({id: '0', value: this.defaultColor});
  colorService: ColorService = inject(ColorService);
    events: EventModel[] = [];
  
  colors = toSignal(this.colorService.getColors(), {
    initialValue: []
  });

  computedColor = computed<ColorModel | undefined>(() => {
    return this.selectedColor();
  });

  setColor(colorPicker: any) {
    if (!this.colorService.checkIfColorIsRedEnough(colorPicker.target.value)) {
      this.error = ERROR_MESSAGE;
      return;
    }
    this.error = '';
    let value = this.colorService.numberToRGB(colorPicker.target.value);
    let id = this.colors().find(c => c.value == value)?.id ?? '0';
    let color: ColorModel = {
      id, value
    };
    this.selectedColor.update(() => color);
  }

  saveColor(clickEvent: any) {
    clickEvent.preventDefault();
    this.addToList(clickEvent.target);
    this.checkDoubleClick();
  }

  addToList(event: any) {
      this.events[this.events.length] = {
          myEvent: event,
          eventTime: Date.now()
      };
  }

  checkDoubleClick() {
      if (this.events.length >= 2) {
          if (this.events[1].eventTime - this.events[0].eventTime <= 2000) {
            this.colorService.save({ id: '0', value: this.events[0].myEvent.style.backgroundColor });
          }
          this.events = [];
      }
  }
}

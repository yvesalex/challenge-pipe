import { Directive, ElementRef, EventEmitter, HostListener, output, Output, signal } from "@angular/core";
import { DEFAULT_CURSOR, DEFAULT_WIDTH, DRAGGING_CURSOR } from "../config/constants";
import { EventModel } from "../models/state.model";

@Directive({
    selector: '[dragging]',
    standalone: true
})
export class DraggingDirective {
    dragStarted: boolean = false;
    lastTimeClick: number = 0;
    elementRef: ElementRef;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    drag(mouseEvent: any) {
        mouseEvent.preventDefault();
        if (this.dragStarted) document.body.style.cursor = DRAGGING_CURSOR;
        else document.body.style.cursor = DEFAULT_CURSOR;
            
        let element = document.getElementById(this.elementRef.nativeElement.id);
        let marginLeft = element?.getBoundingClientRect().left ?? 0;
        let newWidth = mouseEvent.clientX - marginLeft;
        if (this.dragStarted && element && newWidth >= DEFAULT_WIDTH) {
            element.style.width = `${newWidth}px`;
        }
    }

    @HostListener('mousedown', ['$event'])
    onDragStart(mouseEvent: any) {
        this.dragStarted = true;
        this.drag(mouseEvent);
    }
    
    @HostListener('body:mousemove', ['$event'])
    onDragging(mouseEvent: any) {
        this.drag(mouseEvent);
    }

    @HostListener('body:mouseup', ['$event'])
    onDragEnd(mouseEvent: any) {
        this.drag(mouseEvent);
        this.dragStarted = false;
    }
}
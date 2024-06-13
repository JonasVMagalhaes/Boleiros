import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive()
export class ButtonBaseDirective  {
    protected readonly classButton: string = 'app-button';

    constructor(private readonly elementRef: ElementRef,
                private readonly renderer: Renderer2
    ) {
        renderer.addClass(elementRef.nativeElement, 'mat-button')
    }

    // ngAfterViewInit(): void {
    //     this.setAttribute();
    // }

    // private setAttribute() {
    //     const button = this.elementRef.nativeElement.querySelector("button");
    //     this.renderer.setAttribute(button, "mat-raised-button", '');
    // }
}
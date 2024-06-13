import { AfterViewInit, Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive()
export class ButtonBaseDirective implements AfterViewInit {
    protected readonly classButton: string = 'app-button';

    constructor(private readonly elementRef: ElementRef,
                private readonly renderer: Renderer2
    ) { }

    ngAfterViewInit(): void {
        this.setStyleComponent();
    }

    private setStyleComponent() {
        const button = this.elementRef.nativeElement.querySelector("button");
        this.renderer.setAttribute(button, "mat-raised-button", '');
    }
}
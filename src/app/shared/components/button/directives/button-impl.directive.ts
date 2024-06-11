import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive()
export class ButtonBaseDirective implements AfterViewInit {
    protected readonly classButton: string = 'app-button';

    constructor(private readonly elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.setStyleComponent();
    }

    private setStyleComponent() {
        if (this.elementRef.nativeElement.tagName === 'APP-BUTTON') {
            const button: HTMLButtonElement = this.elementRef.nativeElement.querySelector('.app-button') as HTMLButtonElement;
            button.classList.add(this.classButton);
        }
    }
}
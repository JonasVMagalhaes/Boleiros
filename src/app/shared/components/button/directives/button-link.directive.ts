import { Directive } from '@angular/core';

import { ButtonBaseDirective } from './button-impl.directive';

@Directive({
    selector: '[button-link]'
})
export class ButtonLinkDirective extends ButtonBaseDirective {
    protected override readonly classButton = 'button-link';
}
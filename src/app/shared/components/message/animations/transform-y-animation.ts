import { trigger, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export class TransformYAnimation {
    static get(): AnimationTriggerMetadata {
        return trigger('transformY', [
            transition(':enter', [
                style({ transform: 'translateY(-50px)', opacity: 0 }),
                animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1 }),
                animate('500ms ease-in', style({ transform: 'translateY(-50px)', opacity: 0 }))
            ])
        ]);
    }
}

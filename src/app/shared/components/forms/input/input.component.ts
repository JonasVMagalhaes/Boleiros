import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAcessorComponent } from '../value-acessor/value-acessor.component';
import { InputType } from './models/input-type.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ValueAcessorComponent {
  @Input({ required: true }) id: string;
  @Input({ required: true }) label: string;
  @Input() mask: string;
  @Input() type: InputType = InputType.TEXT;
  @Input() placeholder: string = "";
  
  public setValue(event: Event): void {
    this.updateValue((event.target as HTMLInputElement).value)
  }
}

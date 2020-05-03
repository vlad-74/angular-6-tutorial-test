import { Directive, ElementRef, forwardRef, HostListener, Injector, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[ccNumberFormatter]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberFormatterDirective),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberFormatterDirective),
      multi: true,
    }
  ]
})
export class NumberFormatterDirective implements ControlValueAccessor, Validator {
  onChange: (_: any) => void;
  onTouched: () => void;

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    let occurrence = 0;
    value = value.replace(/[^\d,\.]/gi, '')
      .replace(/[+-]/gi, '')
      .replace(',', '.').replace(/\./g, function (match) {
        occurrence++;
        return (occurrence === 2) ? '' : match;
      });
    this.writeValue(value);
    this.onChange(value === '' || isNaN(value) ? null : Number(value));
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(control: FormControl) {
    if (control.value) {
      setTimeout(() => control.markAsTouched(), 0);
    }
    return (control.valid) ? null : {
      [this._elementRef.nativeElement.id]: {
        valid: false,
      },
    };
  }

  constructor(private _renderer: Renderer2,
              private _elementRef: ElementRef,
              private _inj: Injector) {
  }

}

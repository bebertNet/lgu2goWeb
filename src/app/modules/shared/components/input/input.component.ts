import {
    Input,
    Output,
    OnInit,
    Component,
    EventEmitter
} from '@angular/core';

import {
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: InputComponent
        }
    ]
})
export class InputComponent implements OnInit {
    @Input() type = 'text';
    @Input() label: string = undefined;
    @Input() placeholder = '';
    @Input() disabled: boolean;
    @Input() height = 50;
    @Input() hideError: boolean;

    public _value: string;
    public _errorMessage: string;
    private _control: FormControl = null;

    private _onChange: (value: any) => void;

    private set value(value: string) {
        this._value = value;

        if (this._onChange && !this.control) {
            this._onChange(this.value);
        }
    }
    private get value(): string {
        return this._value;
    }

    @Input()
    get control() { return this._control; }
    set control(value: FormControl) {
        this._control = value;

        //   value.valueChanges.subscribe(
        //       (data) => {
        //           if (value.errors) {
        //               this._errorMessage = value.errors['errorMessage'];
        //           } else {
        //               this._errorMessage = null;
        //           }
        //       }
        //   );
    }

    constructor() { }

    ngOnInit() {
    }

    registerOnChange(fn: (value) => void) {
        this._onChange = fn;
    }

    registerOnTouched() {
        // TODO: Implement me
    }

    writeValue(value: any) {
        this.value = value;
    }

    onBlur() {
        if (this.control) {
            this._onChange(this.value);
        }
    }
}

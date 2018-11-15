import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    InputComponent,
    ButtonComponent
} from './components';

@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        ButtonComponent
    ]
})
export class SharedModule { }

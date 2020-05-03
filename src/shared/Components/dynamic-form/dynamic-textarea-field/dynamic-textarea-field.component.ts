import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFieldClass} from '../../../Models/Abstract/dynamicField.class';

@Component({
    selector: 'cc-dynamic-textarea-field',
    templateUrl: './dynamic-textarea-field.component.html',
    styleUrls: ['./dynamic-textarea-field.component.scss']
})
export class DynamicTextareaFieldComponent extends DynamicFieldClass implements OnInit {

    @ViewChild('textArea')
    textArea;

    constructor() {
        super();
    }

    ngOnInit() {
    }
}

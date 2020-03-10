import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Controls, DataInput, FormUpdate, NgxAutomaticRootFormComponent } from 'ngx-sub-form';
import { IAppForm } from '../iapp-form';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-automatic-root-form',
    templateUrl: './automatic-root-form.component.html',
    styleUrls: ['./automatic-root-form.component.css']
})
export class AutomaticRootFormComponent
    extends NgxAutomaticRootFormComponent<IAppForm> {
    @DataInput()
    // tslint:disable-next-line:no-input-rename
    @Input('viewmodel')
    dataInput: Required<IAppForm> | null | undefined;

    // tslint:disable-next-line:no-output-rename
    @Output('viewmodelUpdated')
    dataOutput: EventEmitter<IAppForm> = new EventEmitter<IAppForm>();
    protected emitInitialValueOnInit = false;

    constructor() {
        super();
        this.dataInput$.subscribe((data) => {
            console.log('AutomaticRootFormComponent -  dattinput', data);
        })
    }

    onFormUpdate(formUpdate: FormUpdate<IAppForm>): void {
        console.log('AppRootFormComponent - onFormUpdate ', formUpdate);
        super.onFormUpdate(formUpdate);
    }

    protected transformToFormGroup(viewmodel: IAppForm | null): IAppForm {
        console.log('transformToFormGroup', viewmodel);
        return {
            title: viewmodel.title,
            something: viewmodel.something
        };
    }

    protected transformFromFormGroup(formValue: IAppForm): IAppForm | null {
        return {...formValue};
    }

    protected getFormControls(): Controls<IAppForm> {
        console.log('getFormControls')
        return {
            title: new FormControl(null),
            something: new FormControl(null)
        };
    }

}

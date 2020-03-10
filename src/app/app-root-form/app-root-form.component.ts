import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Controls, DataInput, FormUpdate, NgxRootFormComponent } from 'ngx-sub-form';
import { IAppForm } from '../iapp-form';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root-form',
    templateUrl: './app-root-form.component.html',
    styleUrls: ['./app-root-form.component.css']
})
export class AppRootFormComponent extends NgxRootFormComponent<IAppForm> {
    @DataInput()
    @Input('viewmodel') dataInput: Required<IAppForm> | null | undefined;

    @Output('viewmodelUpdated') dataOutput: EventEmitter<IAppForm> = new EventEmitter<IAppForm>();

    protected emitInitialValueOnInit = false;

    constructor() {
        super();
        this.dataInput$.subscribe((data) => {
            console.log('AppRootFormComponent -  dattinput', data);
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
        return {
            title: new FormControl(null),
            something: new FormControl(null)
        };
    }

}

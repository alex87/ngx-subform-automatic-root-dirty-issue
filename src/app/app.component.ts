import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IAppForm } from './iapp-form';
import { AppRootFormComponent } from './app-root-form/app-root-form.component';
import { AutomaticRootFormComponent } from './automatic-root-form/automatic-root-form.component';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(AppRootFormComponent, { static: true })
  rootFormRef: AppRootFormComponent;
  @ViewChild(AutomaticRootFormComponent, { static: true })
  autoFormRef: AutomaticRootFormComponent;

  formModel: IAppForm = {
    title: "default title",
    something: {
      someNum: 123
    }
  };

  rootFormModel: IAppForm;
  autoFormModel: IAppForm;

  ngOnInit() {
    this.setRootFormValues();
    this.setAutoFormValues();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.rootFormRef.dataOutput.subscribe(value => {
      console.log("rootFormValue", value);
    });
   /* this.autoFormRef.dataOutput.subscribe(value => {
      console.log("autoFormRefVAlue", value);
    });*/
  }

  setRootFormValues() {
    this.rootFormModel = { ...this.formModel };
  }
  setAutoFormValues() {
    this.autoFormModel = { ...this.formModel };
  }

  logRootFormValues() {
    console.log('logRootFormValues');
    this.rootFormRef.manualSave();
  }

  logAutoFormValues() {
    console.log('logAutoFormValues');
    this.autoFormRef.manualSave();
  }

  rootFormChanged($event) {
    console.log("rootFormChanged", $event);
  }
  autoFormChanged($event) {
    console.log("autoFormChanged", $event);
  }
}

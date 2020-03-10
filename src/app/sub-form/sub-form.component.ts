import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { NgxSubFormComponent, subformComponentProviders } from "ngx-sub-form";
import { IAppForm, subFormModel } from "../iapp-form";
@Component({
  selector: "app-sub-form",
  templateUrl: "./sub-form.component.html",
  styleUrls: ["./sub-form.component.css"],
  providers: subformComponentProviders(SubFormComponent)
})
export class SubFormComponent extends NgxSubFormComponent<subFormModel>
  implements OnInit {
  
  protected emitInitialValueOnInit = false;

  ngOnInit() {
    
  }

  getFormControls() {
    return {
      someNum: new FormControl(null)
    };
  }
}

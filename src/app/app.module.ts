import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubFormComponent } from './sub-form/sub-form.component';
import { AppRootFormComponent } from './app-root-form/app-root-form.component';
import { AutomaticRootFormComponent } from './automatic-root-form/automatic-root-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SubFormComponent, AppRootFormComponent, AutomaticRootFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    FieldErrorDisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

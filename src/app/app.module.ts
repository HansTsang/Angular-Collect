import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent, TriksCardComponent, InputComponent } from './components';
import { ZgInputComponent } from './components/zg-input/zg-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TriksCardComponent,
    InputComponent,
    ZgInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

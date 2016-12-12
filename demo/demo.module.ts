import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2CloudinaryModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, Ng2CloudinaryModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}
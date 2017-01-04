import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CloudinaryModule } from '../src';
import { FileUploadModule } from 'ng2-file-upload';
import { Demo } from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CloudinaryModule,
    FileUploadModule
  ],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule { }
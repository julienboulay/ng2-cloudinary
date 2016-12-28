import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import {CloudinaryImageComponent} from './cloudinary-image.component';
import {CloudinaryImageService} from './cloudinary-image.service';

@NgModule({
  declarations: [
    CloudinaryImageComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    CloudinaryImageComponent,
  ],
  providers: [
    CloudinaryImageService
  ]
})
export class Ng2CloudinaryModule {}

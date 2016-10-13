import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {CloudinaryImageComponent} from './cloudinary-image.component';
import {CloudinaryImageService} from './cloudinary-image.service';

export {CloudinaryOptions} from './cloudinary-options.class';
export {CloudinaryUploader} from './cloudinary-uploader.service';
export {CloudinaryImageService};

@NgModule({
  declarations: [
    CloudinaryImageComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  imports: [CommonModule],
  exports: [
    CloudinaryImageComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  providers: [
    CloudinaryImageService
  ]
})
export class Ng2CloudinaryModule {}

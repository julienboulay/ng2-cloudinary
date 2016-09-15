import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {CloudinaryImageComponent} from './cloudinary-image.component';

export {CloudinaryOptions} from './cloudinary-options.class';
export {CloudinaryUploader} from './cloudinary-uploader.service';

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
  ]
})
export class Ng2CloudinaryModule {}

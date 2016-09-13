import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloudinaryImageComponent} from './cloudinary-image.component';

export {CloudinaryOptions} from './cloudinary-options.class';
export {CloudinaryUploader} from './cloudinary-uploader.service';

@NgModule({
  declarations: [
    CloudinaryImageComponent
  ],
  imports: [CommonModule],
  exports: [
    CloudinaryImageComponent
  ]
})
export class Ng2CloudinaryModule {}

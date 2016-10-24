import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class';
import { CloudinaryTransforms } from './cloudinary-transforms.class';
import { CloudinaryImageService } from './cloudinary-image.service';

@Component({
  selector: 'cl-image',
  template: `
    <img [src]="imageUrl" [title]="title || ''" [alt]="alt || ''">
  `
})
export class CloudinaryImageComponent implements OnInit, OnChanges {
    imageUrl: string = '';
    transforms: CloudinaryTransforms = new CloudinaryTransforms();

    @Input('public-id') publicId: string;
    @Input() options: CloudinaryOptions;
    @Input() title: string;
    @Input() alt: string;

    constructor(private _imageService: CloudinaryImageService) { }

    ngOnInit(): void {
      if (!this.options) throw new Error('CloudinaryOptions are required for cl-image component');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.publicId && this.options) {
            this.imageUrl = this._imageService.getImageUrl(this.publicId, this.options, this.transforms);
        }else {
            this.imageUrl = '';
        }
    }

    @Input()
    set format(value: string){
        this.transforms.format = value;
    }

    @Input()
    set height(value: number) {
        this.transforms.height = value;
    }

    @Input()
    set width(value: number) {
        this.transforms.width = value;
    }

    @Input()
    set crop(value: string) {
        this.transforms.crop = value;
    }

    @Input()
    set gravity(value: string) {
        this.transforms.gravity = value;
    }

    @Input()
    set x(value: number) {
        this.transforms.x = value;
    }

    @Input()
    set y(value: number) {
        this.transforms.y = value;
    }

}
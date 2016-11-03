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
    set width(value: number) {
        this.transforms.width = value;
    }

    @Input()
    set height(value: number) {
        this.transforms.height = value;
    }

    @Input()
    set crop(value: string) {
        this.transforms.crop = value;
    }

    @Input('aspect-ratio')
    set aspect_ratio(value: string) {
        this.transforms.aspect_ratio = value;
    }

    @Input()
    set gravity(value: string) {
        this.transforms.gravity = value;
    }

    @Input()
    set zoom(value: number) {
        this.transforms.zoom = value;
    }

    @Input()
    set x(value: number) {
        this.transforms.x = value;
    }

    @Input()
    set y(value: number) {
        this.transforms.y = value;
    }

    @Input()
    set format(value: string){
        this.transforms.format = value;
    }

    @Input()
    set quality(value: string) {
        this.transforms.quality = value;
    }

    @Input()
    set radius(value: string) {
        this.transforms.radius = value;
    }

    @Input()
    set angle(value: string) {
        this.transforms.angle = value;
    }

    @Input()
    set effect(value: string) {
        this.transforms.effect = value;
    }

    @Input()
    set opacity(value: number) {
        this.transforms.opacity = value;
    }

    @Input()
    set border(value: string) {
        this.transforms.border = value;
    }

    @Input()
    set background(value: string) {
        this.transforms.background = value;
    }

    @Input()
    set overlay(value: string) {
        this.transforms.overlay = value;
    }

    @Input()
    set underlay(value: string) {
        this.transforms.underlay = value;
    }

    @Input('default-image')
    set default_image(value: string) {
        this.transforms.default_image = value;
    }

    @Input()
    set delay(value: number) {
        this.transforms.delay = value;
    }

    @Input()
    set color(value: string) {
        this.transforms.color = value;
    }

    @Input()
    set dpr(value: string) {
        this.transforms.dpr = value;
    }

    @Input()
    set page(value: number) {
        this.transforms.page = value;
    }

    @Input()
    set density(value: number) {
        this.transforms.density = value;
    }

    @Input()
    set flags(value: string) {
        this.transforms.flags = value;
    }

    @Input()
    set transformation(value: string) {
        this.transforms.transformation = value;
    }

}
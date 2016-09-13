import { Component, Input, OnInit } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class';

@Component({
  selector: 'cl-image',
  template: `
    <img [src]="imageUrl" [style.height.px]="height" [style.width.px]="width">
  `
})
export class CloudinaryImageComponent implements OnInit {
    imageUrl: string = '';
    @Input() options: CloudinaryOptions;
    @Input() height: string;
    @Input() width: string;
    @Input() crop: string;
    @Input() gravity: string;
    @Input() x: string;
    @Input() y: string;

    ngOnInit(): void {
      if (!this.options) throw new Error('CloudinaryOptions are required for cl-image component');
    }

    @Input('public-id')
    set publicId(value: string) {
        this.imageUrl = this.getImageUrl(value);
    }

    private getImageUrl(publicId: string): string {
        let resourceUrl: string = '';

        if (publicId) {
            resourceUrl = 'https://res.cloudinary.com/' +
                this.options.cloud_name + '/' +
                'image/upload/' +
                this.getTransformationForUrlSegment() +
                publicId + '.jpg';
        }
        return resourceUrl;
    }

    private getTransformationForUrlSegment(): string {
        let transformSegment: string = '';

        transformSegment += this.toPropertySegment(transformSegment, 'height', this.height);
        transformSegment += this.toPropertySegment(transformSegment, 'width', this.width);
        transformSegment += this.toPropertySegment(transformSegment, 'gravity', this.gravity);
        transformSegment += this.toPropertySegment(transformSegment, 'crop', this.crop);
        transformSegment += this.toPropertySegment(transformSegment, 'x', this.x);
        transformSegment += this.toPropertySegment(transformSegment, 'y', this.y);

        if (transformSegment.length > 0) {
            transformSegment += '/';
        }

        return transformSegment;
    }

    private toPropertySegment(segment: string, name: string, value: any): string {
        let newSegment: string = '';

        if (name && value) {
            if (segment.length > 0) {
                newSegment += ',';
            }

            newSegment += name.substring(0, 1).toLowerCase() + '_' + value;
        }
        return newSegment;
    }
}

import { Injectable } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class.ts';
import { CloudinaryTransforms } from './cloudinary-transforms.class.ts';

const CLOUDINARY_URL: string = 'https://res.cloudinary.com/';

@Injectable()
export class CloudinaryImageService {

    getImageUrl(publicId: string, options: CloudinaryOptions, transforms: CloudinaryTransforms): string {
        return  CLOUDINARY_URL +
            options.cloud_name + '/' +
            'image/upload/' +
            getTransformationForUrlSegment(transforms) +
            publicId + '.' + (transforms.format || 'jpg');

    }

}

function getTransformationForUrlSegment(transforms: CloudinaryTransforms): string {
    let transformSegment: string = '';

    transformSegment += toPropertySegment(transformSegment, 'height', transforms.height);
    transformSegment += toPropertySegment(transformSegment, 'width', transforms.width);
    transformSegment += toPropertySegment(transformSegment, 'gravity', transforms.gravity);
    transformSegment += toPropertySegment(transformSegment, 'crop', transforms.crop);
    transformSegment += toPropertySegment(transformSegment, 'x', transforms.x);
    transformSegment += toPropertySegment(transformSegment, 'y', transforms.y);

    if (transformSegment.length > 0) {
        transformSegment += '/';
    }

    return transformSegment;
}

function toPropertySegment(segment: string, name: string, value: any): string {
    let newSegment: string = '';

    if (name && value) {
        if (segment.length > 0) {
            newSegment += ',';
        }

        newSegment += name.substring(0, 1).toLowerCase() + '_' + value;
    }
    return newSegment;
}
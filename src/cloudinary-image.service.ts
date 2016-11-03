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

    //Loop on all transformations
    for (let key in transforms) {
        if (key !== 'format') {
            transformSegment += toPropertySegment(transformSegment, key, transforms[key]);
        }
    }

    if (transformSegment.length > 0) {
        transformSegment += '/';
    }

    return transformSegment;
}

function toPropertySegment(segment: string, transformation: string, value: any): string {
    let newSegment: string = '';

    if (transformation && value) {
        if (segment.length > 0) {
            newSegment += ',';
        }

        newSegment += CloudinaryTransforms.URL_PARAMS[transformation] + '_' + value;
    }
    return newSegment;
}
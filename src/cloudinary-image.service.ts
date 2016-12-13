import { Injectable } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class';
import { CloudinaryTransforms } from './cloudinary-transforms.class';

const CLOUDINARY_URL: string = 'https://res.cloudinary.com/';

@Injectable()
export class CloudinaryImageService {

    getImageUrl(publicId: string, options: CloudinaryOptions, transforms: CloudinaryTransforms): string {
        return  CLOUDINARY_URL +
            options.cloud_name + '/' +
            'image/upload/' +
            transforms.toUrlSegment() +
            publicId + '.' + (transforms.format || 'jpg');

    }
}



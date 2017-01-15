import { Injectable } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class';
import { CloudinaryTransforms } from './cloudinary-transforms.class';

const CLOUDINARY_URL: string = 'https://res.cloudinary.com/';

@Injectable()
export class CloudinaryImageService {

    getImageUrl(publicId: string, cloudName: string, resourceType: string, type: string, transforms: CloudinaryTransforms): string {

    let constuctedURL : string = CLOUDINARY_URL +
      cloudName + '/' +
      resourceType + '/' +
      type + '/' +
      transforms.toUrlSegment() + publicId;

    // Permit format to be unset
    // If unset, Cloudinary returns the image in the format that it was uploaded in
    if (transforms.format) {
      constuctedURL += '.' + transforms.format;
    }

    return constuctedURL;

  }
}



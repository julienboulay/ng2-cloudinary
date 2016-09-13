import { OnInit } from '@angular/core';
import { CloudinaryOptions } from './cloudinary-options.class';
export declare class CloudinaryImageComponent implements OnInit {
    imageUrl: string;
    options: CloudinaryOptions;
    height: string;
    width: string;
    crop: string;
    gravity: string;
    x: string;
    y: string;
    ngOnInit(): void;
    publicId: string;
    private getImageUrl(publicId);
    private getTransformationForUrlSegment();
    private toPropertySegment(segment, name, value);
}

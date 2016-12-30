import { Component, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from '../src';

import { CODE_SAMPLES } from './code-samples.constant';

declare var Prism: any;

@Component({
    selector: 'demo-app',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Demo implements AfterViewChecked {
    CODE_SAMPLES: any = CODE_SAMPLES;

    imageId: string = 'e3264cf16f34ecd3c7c564f5668cbc1e';
    cloudName: string = 'demo';
    type: string = 'gravatar';
    width: number = 200;

    userCloudName: string;
    userPreset: string;

    // Temporary set uploadOptions
    // will be overriden with typed cloudName and preset when a file added to queue  
    uploader: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({ cloudName: 'demo', uploadPreset: 'preset' }));

    constructor() {
        this.uploader.onAfterAddingFile = (item: any) => {
            //Update cloudname and preset
            this.uploader.cloudName = this.userCloudName;
            this.uploader.uploadPreset = this.userPreset;
            //Update uploadUrl on FileItem
            item.url = this.uploader.options.url;

            return item;
        };

        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            //Update imageId, type and cloudname to replace cloudinary placeholder
            this.imageId = res.public_id;
            this.type = this.uploader.type;
            this.cloudName = this.userCloudName;
            this.width = undefined;

            return { item, response, status, headers };
        };
    }

    ngAfterViewChecked(): any {
        return Prism.highlightAll();
    }

    upload() {
        this.uploader.uploadAll();
    }
}

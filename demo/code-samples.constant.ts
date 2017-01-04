export const CODE_SAMPLES: any = {
    'templates': {
        'cl-image': {
            'simple' : `
                <!-- demo.component.html -->
                <cl-image public-id="sample" cloud-name="demo"></cl-image>
                `,
            'transform-height': `
                <!-- demo.component.html -->
                <cl-image public-id="sample" cloud-name="demo" height="200"></cl-image>
                `,
            'transform-crop': `
                <!-- demo.component.html -->
                <cl-image public-id="sample" cloud-name="demo" width="300" height="200" crop="crop"></cl-image>
                `,
            'transform-autocrop': `
                <!-- demo.component.html -->
                <span>
                    <cl-image public-id="basketball_in_net" cloud-name="demo" height="200">
                    </cl-image>
                    <p><b>Original</b></p>
                </span>
                <span>
                    <cl-image public-id="basketball_in_net" cloud-name="demo" width="200" height="300" crop="fill" gravity="center">
                    </cl-image>
                    <p><b>Regular fill</b></p>
                </span>
                <span>
                    <cl-image public-id="basketball_in_net" cloud-name="demo" width="200" height="300" crop="fill" gravity="auto">
                    </cl-image>
                    <p><b>Automatic fill</b></p>
                </span>
                `
        },
        'upload': {
            'unsigned': `
                <!-- demo.component.html -->

                <input type="file" ng2FileSelect [uploader]="uploader" accept="image/*;capture=camera">
                
                <button (click)="upload()">Upload</button>
                
                <cl-image [public-id]="imageId" [cloud-name]="uploader.cloudName"></cl-image>
                `
        }
    },
    'components': {
        'cl-image': `
            //demo.component.ts
            import {Component} from '@angular/core';
            
            @Component({
                selector: 'demo-app',
                templateUrl: 'demo.component.html'
            })
            export class Demo {
            }
            `,
        'unsigned-upload': `
            //demo.component.ts
            import { Component } from '@angular/core';
            import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

            @Component({
                selector: 'demo-app',
                templateUrl: 'demo.component.html'
            })
            export class Demo {

                imageId: string;

                uploader: CloudinaryUploader = new CloudinaryUploader(
                    new CloudinaryOptions({ cloudName: 'myCloudName', uploadPreset: 'myUnsignedPreset' })
                );

                constructor(){
                    //Override onSuccessItem to retrieve the imageId
                    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
                        let res: any = JSON.parse(response);
                        this.imageId = res.public_id;
                        return { item, response, status, headers };
                    };
                }

                upload() {
                    this.uploader.uploadAll();
                }
            }
            `
    },
    'modules': {
        'cl-image': `
            //demo.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';

            import { Ng2CloudinaryModule } from './../ng2-cloudinary';
            import { Demo } from './demo.component';

            @NgModule({
                declarations: [Demo],
                imports: [
                    BrowserModule,
                    Ng2CloudinaryModule
                ],
                bootstrap: [Demo]
            })
            export class DemoModule {}
            `,
        'upload': `
            //demo.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';

            import { Ng2CloudinaryModule } from './../ng2-cloudinary';
            import { FileUploadModule } from 'ng2-file-upload';
            import { Demo } from './demo.component';

            @NgModule({
                declarations: [Demo],
                imports: [
                    BrowserModule,
                    Ng2CloudinaryModule,
                    FileUploadModule
                ],
                bootstrap: [Demo]
            })
            export class DemoModule {}
            `
    }
};
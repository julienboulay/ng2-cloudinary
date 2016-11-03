export const CODE_SAMPLES: any = {
    'templates': {
        'cl-image': {
            'simple' : `
                <!-- demo.component.html -->
                <cl-image public-id="sample" [options]="options"></cl-image>
                `,
            'transform-height': `
                <!-- demo.component.html -->
                <cl-image public-id="sample" [options]="options" height="200"></cl-image>
                `,
            'transform-crop': `
                <!-- demo.component.html -->
                <cl-image public-id="sample" [options]="options" width="300" height="200" crop="crop"></cl-image>
                `,
            'transform-autocrop': `
                <!-- demo.component.html -->
                <span>
                    <cl-image public-id="basketball_in_net" [options]="options" height="200">
                    </cl-image>
                    <p><b>Original</b></p>
                </span>
                <span>
                    <cl-image public-id="basketball_in_net" [options]="options" width="200" height="300" crop="fill" gravity="center">
                    </cl-image>
                    <p><b>Regular fill</b></p>
                </span>
                <span>
                    <cl-image public-id="basketball_in_net" [options]="options" width="200" height="300" crop="fill" gravity="auto">
                    </cl-image>
                    <p><b>Automatic fill</b></p>
                </span>
                `
        }
    },
    'components': {
        'cl-image': `
            //demo.component.ts
            import {Component} from '@angular/core';
            import {CloudinaryOptions} from '../src/cloudinary-options.class';
            
            @Component({
                selector: 'demo-app',
                templateUrl: 'demo.component.html'
            })
            export class Demo {
                options: CloudinaryOptions = new CloudinaryOptions({ cloud_name: 'demo'});
            }
            `
    },
    'module': `
        import {NgModule} from '@angular/core';
        import {BrowserModule} from '@angular/platform-browser';

        import {Ng2CloudinaryModule} from './../ng2-cloudinary';
        import {Demo} from './demo.component';

        @NgModule({
            declarations: [Demo],
            imports: [BrowserModule, Ng2CloudinaryModule],
            bootstrap: [Demo],
            providers: []
        })
        export class DemoModule {}
        `
};
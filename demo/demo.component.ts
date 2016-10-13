import {Component, ViewEncapsulation, AfterViewChecked} from '@angular/core';
import {CloudinaryOptions} from '../src/cloudinary-options.class';

import {CODE_SAMPLES} from './code-samples.constant';

declare var Prism: any;

@Component({
  selector: 'demo-app',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Demo implements AfterViewChecked {
  options: CloudinaryOptions = new CloudinaryOptions({ cloud_name: 'demo'});

  CODE_SAMPLES: any = CODE_SAMPLES;

  ngAfterViewChecked(): any {
    return Prism.highlightAll();
  }
}

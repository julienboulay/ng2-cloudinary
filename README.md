# ng2-cloudinary
[![Build Status](https://travis-ci.org/Ekito/ng2-cloudinary.svg?branch=master)](https://travis-ci.org/ekito/ng2-cloudinary)
[![npm version](https://badge.fury.io/js/ng2-cloudinary.svg)](https://badge.fury.io/js/ng2-cloudinary)
[![devDependency Status](https://david-dm.org/ekito/ng2-cloudinary/dev-status.svg)](https://david-dm.org/ekito/ng2-cloudinary#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/ekito/ng2-cloudinary.svg)](https://github.com/ekito/ng2-cloudinary/issues)
[![GitHub stars](https://img.shields.io/github/stars/ekito/ng2-cloudinary.svg)](https://github.com/ekito/ng2-cloudinary/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ekito/ng2-cloudinary/master/LICENSE)

## Demo
https://ekito.github.io/ng2-cloudinary/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

Angular2 components for Cloudinary image back-end

## Installation

Install through npm:
```
npm install --save ng2-cloudinary
```

## Usage

You may also find it useful to view the [demo source](https://github.com/ekito/ng2-cloudinary/blob/master/demo/demo.component.ts).

### Module imports

```typescript
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
```

### cl-image or CloudinaryImageComponent

This directive allows displaying Cloudinary image and apply transformations 

```typescript
//demo.component.ts
import {Component} from '@angular/core';
import {CloudinaryImageComponent} from 'ng2-cloudinary';

@Component({
  selector: 'demo-app',
  template: '<cl-image public-id="image_id" cloud-name="myCloudName"></cl-image>'
})
export class Demo {
}
```

### CloudinaryUploader

This service allows uploading files to cloudinary using ng2-file-upload dependency.

```typescript
//demo.component.ts
import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
  selector: 'demo-app',
  template: '<input type="file" ng2FileSelect [uploader]="uploader"/>',
})
export class Demo {

  cloudinaryImage: any;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'myCloudName', uploadPreset: 'myUnsignedPreset' })
  );

  constructor(){
    //Override onSuccessItem function to record cloudinary response data
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      //response is the cloudinary response
      //see http://cloudinary.com/documentation/upload_images#upload_response
      this.cloudinaryImage = JSON.parse(response);
      
      return {item, response, status, headers};
    };
  }
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://ekito.github.io/ng2-cloudinary/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests. 

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT

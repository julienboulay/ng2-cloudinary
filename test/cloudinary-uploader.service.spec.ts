import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {CloudinaryUploader} from './../src/cloudinary-uploader.service';
import {CloudinaryOptions} from './../src/cloudinary-options.class';

//FormData doesn't seems to work. Create a mock
class FormDataMock {
  data: any = {};
  append(key: string, value: any): void {
    this.data[key] = value;
  }
  get(key: string): any {
    return this.data[key];
  }
}

describe('CloudinaryUploader service', () => {

  it('should configure upload_preset when preparing item upload', () => {
    let uploader: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({
      cloud_name: 'ekito',
      upload_preset: 'preset'}));
    let res: any = uploader.onBuildItemForm({}, new FormDataMock());
    expect(res.form.get('upload_preset')).to.equal('preset');
  });

  it('should not use app credentials when preparing item upload', () => {
    let uploader: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({
      cloud_name: 'ekito'
    }));
    let res: any = uploader.onBuildItemForm({}, new FormDataMock());
    expect(res.fileItem.withCredentials).to.equal(false);
  });

});

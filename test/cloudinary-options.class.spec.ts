import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {CloudinaryOptions} from './../src/cloudinary-options.class';

describe('CloudinaryOptions class', () => {

  it('should fail to instantiate CloudinaryOptions when cloud_name is not provided', () => {
    expect(CloudinaryOptions.bind(CloudinaryOptions, {})).to.throw(Error, 'cloud_name is required');
  });

});

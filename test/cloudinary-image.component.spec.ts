import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {CloudinaryImageComponent} from './../src/cloudinary-image.component';
import {CloudinaryOptions} from './../src/cloudinary-options.class';
import {Ng2CloudinaryModule} from './../ng2-cloudinary';

describe('CloudinaryImage component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [Ng2CloudinaryModule]});
  });

  it('should throw an error if CloudinaryOptions are not provided', () => {
    const fixture: ComponentFixture<CloudinaryImageComponent> = TestBed.createComponent(CloudinaryImageComponent);
    expect(fixture.detectChanges.bind(fixture)).to.throw(Error, /CloudinaryOptions are required/);
  });

  it('should create img DOM element', () => {
    const fixture: ComponentFixture<CloudinaryImageComponent> = TestBed.createComponent(CloudinaryImageComponent);
    const clImageComponent: CloudinaryImageComponent = fixture.componentInstance;
    clImageComponent.options = new CloudinaryOptions({
      cloud_name: 'ekito'
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('<img ng-reflect-src="" src="">');
  });

  it('should create img DOM element without publicId', () => {
    const fixture: ComponentFixture<CloudinaryImageComponent> = TestBed.createComponent(CloudinaryImageComponent);
    const clImageComponent: CloudinaryImageComponent = fixture.componentInstance;
    clImageComponent.options = new CloudinaryOptions({
      cloud_name: 'ekito'
    });
    clImageComponent.publicId = null;
    fixture.detectChanges();

    let expectedImageUrl: string = '';
    expect(clImageComponent.imageUrl).to.equal(expectedImageUrl);
    expect(fixture.nativeElement.innerHTML.trim())
      .to.equal('<img ng-reflect-src="' + expectedImageUrl + '" src="' + expectedImageUrl + '">');
  });

  it('should create img DOM element with publicId', () => {
    const fixture: ComponentFixture<CloudinaryImageComponent> = TestBed.createComponent(CloudinaryImageComponent);
    const clImageComponent: CloudinaryImageComponent = fixture.componentInstance;
    clImageComponent.options = new CloudinaryOptions({
      cloud_name: 'ekito'
    });
    clImageComponent.publicId = 'testPublicId';
    clImageComponent.ngOnChanges(null);
    fixture.detectChanges();

    let expectedImageUrl: string = 'https://res.cloudinary.com/ekito/image/upload/testPublicId.jpg';
    expect(clImageComponent.imageUrl).to.equal(expectedImageUrl);
    expect(fixture.nativeElement.innerHTML.trim())
      .to.equal('<img ng-reflect-src="' + expectedImageUrl + '" src="' + expectedImageUrl + '">');
  });

  it('should create img DOM element with transformations', () => {
    const fixture: ComponentFixture<CloudinaryImageComponent> = TestBed.createComponent(CloudinaryImageComponent);
    const clImageComponent: CloudinaryImageComponent = fixture.componentInstance;
    clImageComponent.options = new CloudinaryOptions({
      cloud_name: 'ekito'
    });
    clImageComponent.height = '100';
    clImageComponent.width = '150';
    clImageComponent.publicId = 'testPublicId';
    clImageComponent.ngOnChanges(null);
    fixture.detectChanges();

    let expectedImageUrl: string = 'https://res.cloudinary.com/ekito/image/upload/h_100,w_150/testPublicId.jpg';
    expect(clImageComponent.imageUrl).to.equal(expectedImageUrl);
    expect(fixture.nativeElement.innerHTML.trim())
      .to.equal('<img ng-reflect-src="' + expectedImageUrl + '" src="' + expectedImageUrl + '">');
  });
});

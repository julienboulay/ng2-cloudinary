export * from 'ng2-file-upload'
import { FileUploader } from 'ng2-file-upload';
import { CloudinaryOptions } from './cloudinary-options.class';

const UPLOAD_ENDPOINT: string = 'https://api.cloudinary.com/v1_1/';

export class CloudinaryUploader extends FileUploader {

  _cloudName: string;
  _resourceType: string;
  _type: string;
  uploadPreset: string;

  public constructor(opts: CloudinaryOptions) {
    super({});
    this._cloudName = opts.cloudName;
    this._resourceType = opts.resourceType || 'auto';
    this._type = opts.type || 'upload';
    this._propagateUploadUrl();

    this.uploadPreset = opts.uploadPreset;
    this.autoUpload = opts.autoUpload;
  }

  public onBuildItemForm(fileItem: any, form: any): any {
    form.append('upload_preset', this.uploadPreset);
    // Force the file uploader to never use app credentials
    fileItem.withCredentials = false;
    return { fileItem, form };
  }

  private _propagateUploadUrl(): void {
    this.options.url = `${UPLOAD_ENDPOINT}${this.cloudName}/${this.resourceType}/${this.type}`;
  }

  set cloudName(value: string) {
    this._cloudName = value;
    this._propagateUploadUrl();
  }

  get cloudName(): string {
    return this._cloudName;
  }

  set resourceType(value: string) {
    this._resourceType = value;
    this._propagateUploadUrl();
  }

  get resourceType(): string {
    return this._resourceType;
  }

  set type(value: string) {
    this._type = value;
    this._propagateUploadUrl();
  }

  get type(): string {
    return this._type;
  }


}

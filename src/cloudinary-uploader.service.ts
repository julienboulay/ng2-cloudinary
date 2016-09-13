export * from 'ng2-file-upload'
import { FileUploader } from 'ng2-file-upload';
import { CloudinaryOptions } from './cloudinary-options.class';

const UPLOAD_ENDPOINT: string = 'https://api.cloudinary.com/v1_1/';

export class CloudinaryUploader extends FileUploader {
  opts: CloudinaryOptions;

  public constructor(opts: CloudinaryOptions) {
    super({});
    this.opts = opts;
    this.options.url = this.getUploadUrl(opts);
    this.options.autoUpload = opts.autoUpload;
  }

  public onBuildItemForm(fileItem: any, form: any): any {
    form.append('upload_preset', this.opts.upload_preset);
    // Force the file uploader to never use app credentials
    fileItem.withCredentials = false;
    return {fileItem, form};
  }

  private getUploadUrl(opts: CloudinaryOptions): string {
    let cloud_name: string = opts.cloud_name;
    let resource_type: string = opts.resource_type;
    let type: string = opts.type;
    return UPLOAD_ENDPOINT + cloud_name + '/' + resource_type + '/' + type;
  }

}

export * from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { CloudinaryOptions } from './cloudinary-options.class';
export declare class CloudinaryUploader extends FileUploader {
    opts: CloudinaryOptions;
    constructor(opts: CloudinaryOptions);
    onBuildItemForm(fileItem: any, form: any): any;
    private getUploadUrl(opts);
}

export class CloudinaryOptions {
    cloud_name: string;
    upload_preset: string;
    resource_type: string;
    type: string;
    autoUpload: boolean;

    public constructor(opts: any) {
        if (!opts.cloud_name) {
            throw new Error('cloud_name is required for CloudinaryOptions');
        }
        this.cloud_name = opts.cloud_name;
        this.upload_preset = opts.upload_preset;
        this.resource_type = opts.resource_type || 'auto';
        this.type = opts.type || 'upload';
        this.autoUpload = !!opts.autoUpload || false;
    }
}

export class CloudinaryOptions {
    cloudName: string;
    uploadPreset: string;
    resourceType: string;
    type: string;
    autoUpload: boolean;

    public constructor(opts: { cloudName: string, uploadPreset: string, resourceType?: string, type?: string, autoUpload?: boolean }) {
        this.cloudName = opts.cloudName;
        this.uploadPreset = opts.uploadPreset;
        this.resourceType = opts.resourceType || 'auto';
        this.type = opts.type || 'upload';
        this.autoUpload = !!opts.autoUpload || false;
    }
}

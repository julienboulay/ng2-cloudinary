export class CloudinaryTransforms {
    static URL_PARAMS: { [key: string] : string; } = {
        'width'         : 'w',
        'height'        : 'h',
        'crop'          : 'c',
        'aspect_ratio'  : 'ar',
        'gravity'       : 'g',
        'zoom'          : 'z',
        'x'             : 'x',
        'y'             : 'y',
        'quality'       : 'q',
        'radius'        : 'r',
        'angle'         : 'a',
        'effect'        : 'e',
        'opacity'       : 'o',
        'border'        : 'bo',
        'background'    : 'b',
        'overlay'       : 'l',
        'underlay'      : 'u',
        'default_image' : 'd',
        'delay'         : 'dl',
        'color'         : 'co',
        'dpr'           : 'dpr',
        'page'          : 'pg',
        'density'       : 'dn',
        'flags'         : 'fl',
        'transformation': 't'
    };

    width: number;
    height: number;
    crop: string;
    aspect_ratio: string;
    gravity: string;
    zoom: number;
    x: number;
    y: number;
    format: string;
    quality: string;
    radius: string;
    angle: string;
    effect: string;
    opacity: number;
    border: string;
    background: string;
    overlay: string;
    underlay: string;
    default_image: string;
    delay: number;
    color: string;
    dpr: string;
    page: number;
    density: number;
    flags: string;
    transformation: string;
}

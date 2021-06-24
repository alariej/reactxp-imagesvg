import * as React from 'react';
import * as Types from './Types';
export declare abstract class ImageSvg extends React.Component<Types.ImageSvgProps, any> {
}
export declare abstract class SvgPath extends React.Component<Types.SvgPathProps, any> {
}
export declare abstract class SvgRect extends React.Component<Types.SvgRectProps, any> {
}
export interface PluginInterface {
    Types: typeof Types;
    default: typeof ImageSvg;
    SvgPath: typeof SvgPath;
    SvgRect: typeof SvgRect;
}

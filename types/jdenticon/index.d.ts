// Type definitions for Jdenticon 2.1.1
// Project: http://jdenticon.com/
// Definitions by: Martin Thorsen Ranang <https://github.com/mtr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JdenticonConfig {
    lightness?: {
        color?: number[];
        grayscale?: number[];
    };
    saturation?: number;
}

interface Jdenticon {
    drawIcon(ctx: CanvasRenderingContext2D, hash: string, size: number): void;
    toPng(hash: string, size: number, padding?: number): string;
    toSvg(hash: string, size: number, padding?: number): string;
    update(el: Element | string, hash?: string, padding?: number): void;

    config: JdenticonConfig;
    version: string;
}

declare module 'jdenticon' {
const jdenticon: Jdenticon;

export default jdenticon;
}

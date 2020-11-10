import { LineMarkerBase } from "../LineMarkerBase";
export declare class ArrowMarker extends LineMarkerBase {
    static createMarker: () => LineMarkerBase;
    id: string;
    constructor();
    private readonly ARROW_SIZE;
    protected setup(): void;
}

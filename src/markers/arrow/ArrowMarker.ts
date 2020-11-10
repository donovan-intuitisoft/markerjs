import { SvgHelper } from "../../helpers/SvgHelper";
import { LineMarkerBase } from "../LineMarkerBase";

export class ArrowMarker extends LineMarkerBase {
    public static createMarker = (): LineMarkerBase => {
        const marker = new ArrowMarker();
        marker.setup();
        return marker;
    }

    public id: string;

    constructor() {
        super();
        this.markerTypeName = 'ArrowMarker';
    }

    private readonly ARROW_SIZE = 6;

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "arrow-marker"]]);

        const tip = SvgHelper.createPolygon(`0,0 ${this.ARROW_SIZE},${this.ARROW_SIZE / 2} 0,${this.ARROW_SIZE}`,
            [["class", "arrow-marker-tip"]]);
        this.id = "arrow-marker-head-" + Date.now();
        this.defs.push(SvgHelper.createMarker(this.id, "auto",
            this.ARROW_SIZE, this.ARROW_SIZE, this.ARROW_SIZE - 1, this.ARROW_SIZE / 2, tip));

        this.markerLine.setAttribute("marker-end", `url(#${this.id})`);
    }

}

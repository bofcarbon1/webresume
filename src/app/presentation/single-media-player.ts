import {Component} from "@angular/core";

@Component({
    selector: 'single-media-player',
    templateUrl: '../presentation/single-media-player.html'
})
export class SingleMediaPlayer {
    sources:Array<Object>;

    constructor() {
        this.sources = [
            {
                src: "./video/WebResumePPP.mp4",
                type: "video/mp4"
            }
    
        ];
    }
}

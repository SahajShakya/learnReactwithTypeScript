"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createShots() {
        console.log("shorts");
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, 
    //can add more than allowed
    short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story created");
    }
}
const youtuber = new Youtube("burst", "normal", 2, "Shorts");
console.log(youtuber.createStory());

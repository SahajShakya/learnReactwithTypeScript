"use strict";
//abstract are like a blue prints from which objects cannot be created
//only class that extends can create pbject throught it
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class TakeVideo extends TakePhoto {
    //abstract function should be implement from which class it's extended compulsary
    constructor(cameraMode, filter, burst) {
        //for abstract class inheritance need super and attribute passed through it
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("serpia");
    }
}
// // const photo = new TakePhoto("potrait", "normal");
const photo = new TakeVideo("potrait", "normal", 3);
console.log(photo.getReelTime());
console.log(photo.getSepia());

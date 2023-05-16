//abstract are like a blue prints from which objects cannot be created
//only class that extends can create pbject throught it
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepia(): void 

    getReelTime(): number {
        //some complex calculation
        return 8;
    }
}

class TakeVideo extends TakePhoto{
    //abstract function should be implement from which class it's extended compulsary
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        //for abstract class inheritance need super and attribute passed through it
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("serpia")
    }
}

// // const photo = new TakePhoto("potrait", "normal");
const photo = new TakeVideo("potrait", "normal", 3);
console.log(photo.getReelTime());
console.log(photo.getSepia());
//INTERFACE AND IMPLEMENTS
interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number,
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) {  }
    createShots() :void {
        console.log("shorts");
    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        //can add more than allowed
        public short: string,
    ) {  }

    createStory(): void {
        console.log("Story created");
    }
}

const youtuber = new Youtube("burst", "normal", 2, "Shorts")
console.log(youtuber.createStory());

export {}


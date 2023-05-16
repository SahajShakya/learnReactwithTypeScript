//Enum is to restrict choice 
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// enum SeatChoice {
//     AISLE = "aisle",
//     MIDDLE = 2,
//     WINDOW,
// }
// const seat = SeatChoice.AISLE;
// console.log(seat);

// var SeatChoice;
// (function (SeatChoice) {
//     SeatChoice["AISLE"] = "aisle";
//     SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
//     SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
// })(SeatChoice || (SeatChoice = {}));
// var seat = SeatChoice.AISLE;
// console.log(seat);

//By declaring it as const unnecessary code is not generated in JS

const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 2,
    WINDOW,
}
const seat = SeatChoice.AISLE;
console.log(seat);

// Js code gen
// Object.defineProperty(exports, "__esModule", { value: true });
// var seat = "aisle" /* SeatChoice.AISLE */;
// console.log(seat);

export {}

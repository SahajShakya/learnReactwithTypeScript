function detectTypes (val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    //if val is num
    return val + 3;
} 
console.log(detectTypes("HeLLo"));
console.log(detectTypes(2));

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
console.log(provideId(""));
console.log(provideId("HelHELLlo"));
console.log(provideId("HHH"));

//Narrowing
function printAll(str: string | string [] | null) {
    if (str) {
        if (typeof str === "object" ) {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === 'string') {
            console.log(str);
        }
    }
}
console.log(printAll("Sting"));
console.log(printAll(["1", "2", "Sahaj"]));

interface UserD {
    name: string,
    email: string,
}
interface AdminD {
    name: string,
    email: string,
    isAdmin: boolean,
}

function isAdminAccount(account: UserD | AdminD) {
    //in such case if (account === AdminD) doesnot works
    // or id (account typeOf AdminD) cannot be done
    //in such cases in operator works
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    return "Not an Admin";
} 
console.log(isAdminAccount({
    name:"Sahaj",
    email: "sahaj@sahaj.com"
}));
console.log(isAdminAccount({
    name:"Sahaj",
    email: "sahaj@sahaj.com",
    isAdmin: true,
}));

//Instance of Narrowing
// Check whether val is instance of another value
// x instance of y

function logVal (x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

console.log(logVal(new Date()));
console.log(logVal("hello"));

//Type Predicate
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish1(pet: Fish | Bird) {
    //typecasting
    return (pet as Fish).swim ! ==undefined
    //return true or false
    //doesnot return if it's fish or bird
}
// to solve
// if retun true mark it as Fish and so one through return type
function isFish(pet: Fish | Bird): pet is Fish {
    //typecasting
    return (pet as Fish).swim ! ==undefined
    //return true or false
    //if True then return type is Fish
    //else bird
}

function getFood(pet: Fish | Bird ) {
    if (isFish(pet)) {
        pet
        return "Fish FOod";
    }
    else  {
        pet
        return "Bird Food";
    }
}

//Discriminated Unions
//
interface Circle {
    kind: "circle", 
    radius: number,
}
interface Square {
    kind: "square",
    side: number,
}


type Shape =  Circle | Square;

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius;
    }
    return shape.side * shape.side;
}

console.log(getTrueShape({
            kind: "circle", 
            radius: 2
        }));
console.log(getTrueShape({
            kind: "square", 
            side: 2
        }));


interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

//Exhaustive Checking
// In above example it only works for Circle and Square
// What if New interface is added in future
// THe above code doesnot work anymore
// Can use never type of such problems
type Shape1 =  Circle | Square | Rectangle;
function getArea(shape: Shape1) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        //This part can only be added or defined if there is never type defined
        case "rectangle":
            return shape.width * shape.length;
        default:
            const _defaultforShape: never = shape;
            return _defaultforShape;
    }
}

console.log(getArea({
    kind: "circle", 
    radius: 2
}));
console.log(getArea({
    kind: "rectangle", 
    length: 2,
    width: 4,
}));
console.log(getArea({
    kind: "square", 
    side: 2
}));


export {}
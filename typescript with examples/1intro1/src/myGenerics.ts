const score: Array<number> = []
const names:Array<string> = []

function indentityOne(val: boolean | number) : boolean | number {
    return val;
}

function indentityTwo(val: any): any {
    return val;
}

//using generic the val Type(autmatically adjust to user defined value type) becomes lock for the function
function indentityThree<Type> (val: Type): Type {
    return val;
}
//Type as number
const asNum = indentityThree(3);
console.log(asNum)
//Type as string
const asString = indentityThree("3");
console.log(asString)
//Type as Boolean
const asBool = indentityThree(true);
console.log(asBool)

//Shortcut or alternative way to define it
function identityFour<T> (val: T): T {
    return val;
}
//Type as number
const asNum1 = identityFour(3);
console.log(asNum1)
//Type as string
const asString1 = identityFour("3");
console.log(asString1)
//Type as Boolean
const asBool1 = identityFour(true);
console.log(asBool1)

//User define type
interface Bootle {
    brand: string,
    type: number,
}

function identityFive<T extends Bootle>(bottle: T): T {
    return bottle;
}
const myBottle = { brand: "Coca Cola", type: 1 };
// const result = identityFive<Bootle>(myBottle);
const result = identityFive(myBottle);
const result1 = identityFive<Bootle>({ brand: "Pepsi", type: 1 });
const result2 = identityFive({ brand: "Dew", type: 1 });
console.log(result);
console.log(result1);
console.log(result2);

// what if argument is array then generic lock the type as array too
// so return type should be array too
function getSearchProducts<T> (products: T[]):T {
    const index = 3
    return products[index];
}
//converting to arrow
// const function_name = <Generic> (ARGS: GenericType): GenericType => {}
// Alternative way to defined mostly on reacts
// const function_name = <Generic,> (ARGS: GenericType): GenericType => {}
const getMoreSearchProducts = <T>(prducts: T[]): T => {
    // some operations
    const myindex = 4;
    return prducts[myindex];
}

interface Database {
    connection: string,
    username: string,
    password: string,
}

function anotherFunction<T, U extends Database> (valOne:T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    }   
}

anotherFunction(3, {
    connection: "Mongo",
    username: "sahaj",
    password: "DSFA@@"
});


"use strict";
const score = [];
const names = [];
function indentityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
//using generic the val Type(autmatically adjust to user defined value type) becomes lock for the function
function indentityThree(val) {
    return val;
}
//Type as number
const asNum = indentityThree(3);
console.log(asNum);
//Type as string
const asString = indentityThree("3");
console.log(asString);
//Type as Boolean
const asBool = indentityThree(true);
console.log(asBool);
//Shortcut or alternative way to define it
function identityFour(val) {
    return val;
}
//Type as number
const asNum1 = identityFour(3);
console.log(asNum1);
//Type as string
const asString1 = identityFour("3");
console.log(asString1);
//Type as Boolean
const asBool1 = identityFour(true);
console.log(asBool1);
function identityFive(bottle) {
    return bottle;
}
const myBottle = { brand: "Coca Cola", type: 1 };
// const result = identityFive<Bootle>(myBottle);
const result = identityFive(myBottle);
const result1 = identityFive({ brand: "Pepsi", type: 1 });
const result2 = identityFive({ brand: "Dew", type: 1 });
console.log(result);
console.log(result1);
console.log(result2);
// what if argument is array then generic lock the type as array too
// so return type should be array too
function getSearchProducts(products) {
    const index = 3;
    return products[index];
}
//converting to arrow
// const function_name = <Generic> (ARGS: GenericType): GenericType => {}
// Alternative way to defined mostly on reacts
// const function_name = <Generic,> (ARGS: GenericType): GenericType => {}
const getMoreSearchProducts = (prducts) => {
    // some operations
    const myindex = 4;
    return prducts[myindex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, {
    connection: "Mongo",
    username: "sahaj",
    password: "DSFA@@"
});

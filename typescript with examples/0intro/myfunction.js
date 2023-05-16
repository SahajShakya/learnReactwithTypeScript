"use strict";
//By default Ts assigned function as any since 
// confusion on what data to be returned
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase();
    return num + 2;
}
//addTwo("5");
addTwo(5);
//How to Properly write it 
//infert the type for the arguments
function addOne(num) {
    return num + 1;
}
addOne(1);
var loginUser = function (name, email, isLogged) { };
loginUser("Sahaj", "sahaj@sahaj.com", true);
//loginUser("Sahaj","sahaj@sahaj.com")
//what if there are not some values to be passed as arguments?
//Solution: Use Default values
var loginUser1 = function (name, email, isLogged) {
    if (isLogged === void 0) { isLogged = true; }
};
loginUser1("Sahaj", "sahaj@sahaj.com");

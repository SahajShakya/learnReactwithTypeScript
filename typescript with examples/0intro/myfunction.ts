//By default Ts assigned function as any since 
// confusion on what data to be returned

function addTwo(num) {
    //num.toUpperCase();
    return num + 2;
}
//addTwo("5");
addTwo(5);

//How to Properly write it 
//infert the type for the arguments

function addOne(num: number) {
    return num + 1;
}
addOne(1);

//What if?
function addThree(num: number) {
    return "Three"
}
addThree(1);
//THis is allowed
//Here Ts by default reffered it as string function
//How to return more accurate values?

let loginUser = (name: string, email:string, isLogged: boolean) => {};
loginUser("Sahaj","sahaj@sahaj.com",true)
//loginUser("Sahaj","sahaj@sahaj.com")
//what if there are not some values to be passed as arguments?
//Solution: Use Default values

let loginUser1 = (name: string, email:string, isLogged: boolean=true) => {};
loginUser1("Sahaj","sahaj@sahaj.com")

//How to return  type in case of function
const getHello = (s:string):string => {
    return "";
}
//using built in function
const heros = ["thor", "spiderman", "ironman"] 
heros.map((hero):string => {
    return `her is ${hero}`;
})
//When function doesnot have a return type
function consoleError(errMsg:string): void {
    console.log(errMsg);
}
//When function never has a return type
//Generally use while termination of program or throws exceptions
function handleError(errMsg:string): never {
    throw new Error(errMsg)
}


export {}
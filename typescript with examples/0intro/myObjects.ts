const User = {
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: true,
};
//An object is generally/mostly used on function (returning and creating and soon)
function createUser({name: string, isPaid: boolean}) {}
createUser({ name: "Sahaj", isPaid: false });

//When function returns an Object
// function createCourse(ARGUMENTS):{OBJECT RETURN TYPE}{
//     return {}
// }
function createCourse():{name:string, price: number}{
    return { name: "ReactJS", price:299 }
} 

//type alias
//advantage of creating type
//can be adheard to the respective type for multiple functions


type User = {
    name: string;
    email: string;
    isActive: boolean;
}
//WITH RETURN TYPE
// function FUNCTIONNAME (argument: TYPE) : FUNCTION_RETURNTYPE {
//     return { RETURN }
// }

function createnewUser (user: User) : User {
    return { name: "", email: "", isActive: true }
}
createnewUser({ name: "Sahaj", email: "sahaj@sahaj.com", isActive: true });

//WITHOUT RETURN TYPE

function createnayaUser (user: User)  {
    console.log(user.email, user.name);    
}
createnayaUser({ name: "Sahaj", email: "sahaj@sahaj.com", isActive: true });

//1. Readonly Keyword
//Modify objects
type User1 = {
    //readonly _id cannot be changed
    //if readonly is added infront of var then it's not mutable
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}
let myUser: User1 = { 
    _id: "1234",
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: false,
}
myUser.email = 'sahaj@saz.com';
//Readonly var is not mutable
//myUser._id = "12"

//2. Literals ?
type User2 = {
    //readonly _id cannot be changed
    //if readonly is added infront of var then it's not mutable
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

//When ? literials is added, that type is not madatory to add
let myUser2: User2 = { 
    _id: "1234",
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: false,
}
myUser2.email = 'sahaj@saz.com';

//Union: Define a type based on the combination of a new type
type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type card = cardNumber & cardDate & {
    cvv: number
}

export {};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: true,
};
//An object is generally/mostly used on function (returning and creating and soon)
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Sahaj", isPaid: false });
//When function returns an Object
// function createCourse(ARGUMENTS):{OBJECT RETURN TYPE}{
//     return {}
// }
function createCourse() {
    return { name: "ReactJS", price: 299 };
}
//WITH RETURN TYPE
// function FUNCTIONNAME (argument: TYPE) : FUNCTION_RETURNTYPE {
//     return { RETURN }
// }
function createnewUser(user) {
    return { name: "", email: "", isActive: true };
}
createnewUser({ name: "Sahaj", email: "sahaj@sahaj.com", isActive: true });
//WITHOUT RETURN TYPE
function createnayaUser(user) {
    console.log(user.email, user.name);
}
createnayaUser({ name: "Sahaj", email: "sahaj@sahaj.com", isActive: true });
var myUser = {
    _id: "1234",
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: false,
};
myUser.email = 'sahaj@saz.com';
//When ? literials is added, that type is not madatory to add
var myUser2 = {
    _id: "1234",
    name: "Sahaj",
    email: "sahaj@sahaj.com",
    isActive: false,
};
myUser2.email = 'sahaj@saz.com';

"use strict";
// class User {
//     public email: string
//     private name: string
//     city: string = " "
//     constructor (email: string , name: string ) {
//         this.email = email;
//         this.name = name;
//     }
// }
//Best practise to declare class and constructors
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //private var can only be availabe within the class
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Lalitpur";
    }
    //Pivate function are only accessible within the class only
    //const sahaj = new User("sahaj@sahaj.com", "Sahaj");
    //sahaj.deleteToken() cant be done
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Couser count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    displaySomethings() {
        console.log("Display something");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        //only public and protected feilds are accessible
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sahaj = new User("sahaj@sahaj.com", "Sahaj");
console.log(sahaj.displaySomethings());

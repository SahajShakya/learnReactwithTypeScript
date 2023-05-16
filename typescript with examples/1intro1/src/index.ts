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
    //private var can only be availabe within the class
    // private _courseCount = 1;
    protected _courseCount = 1;
    
    readonly city: string = "Lalitpur";
    constructor (
        public email: string,
        public name: string,
        // private userId: string,
    ){
    }

    //Pivate function are only accessible within the class only
    //const sahaj = new User("sahaj@sahaj.com", "Sahaj");
    //sahaj.deleteToken() cant be done
    private deleteToken() {
        console.log("Token Deleted");
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <=1) {
            throw new Error("Couser count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    displaySomethings(): void {
        console.log("Display something");
    }
}

class SubUser extends User {
    //only public and protected feilds are accessible
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4
    }
}

const sahaj = new User("sahaj@sahaj.com", "Sahaj");
console.log(sahaj.displaySomethings());

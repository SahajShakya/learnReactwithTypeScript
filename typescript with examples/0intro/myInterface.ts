// interface is similar to type
// interface is lose form of class
// force to ther describe type but doesnt define what it's suppose to do
// Intresting compared to type is defination of function
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    // Alternative way to define
    // startTrail(): string,
    getCoupon(coupon: string): number,
}

//Intresting about interface is it can be redefined with out touching previous
// Also known as re opening of Interface
interface User {
    githubToken: string
}

//Advantage of interface is Inheritance of properties
interface Admin extends User {
    role: "Admin" | "TA" | "learner"
}

const sahaj: User = { dbId: 22, 
                        email: "sahaj@sahaj.com", 
                            userId: 12, 
                                githubToken: "github",
                                    startTrail: () => { return "trail started" }, 
                                        getCoupon: (name: "sahaj") => { return 10 } 
                    }
const saz: Admin = { dbId: 22, 
                        email: "sahaj@sahaj.com", 
                            userId: 12, 
                                githubToken: "github",
                                    role: "Admin",
                                        startTrail: () => { return "trail started" }, 
                                            getCoupon: (name: "sahaj") => { return 10 } 
                    }
console.log(sahaj);
console.log(sahaj.startTrail());
console.log(sahaj.getCoupon("sahaj12"));
sahaj.email = 'sahaj@saz.com';
console.log(saz);

//Type alias vs Interface
// Type cannt be redefined but interface can be redefined with out touching previous
// Type cannot be re-opened but interface can alway be extended

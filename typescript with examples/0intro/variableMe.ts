let greetings: string = "Hello Sahaj";
console.log(greetings);

//Number
let userId: number = 334466;
console.log(userId);
console.log(userId.toLocaleString());

//Boolean
let isLoggedIn:boolean = true;

console.log(isLoggedIn.valueOf());

//Good Practise
//Ts automatically assigned types for above works
//no need to implictly assign value for small works
let userId_ = 3366;
console.log(userId_)

//any Where to use any
//any is user where the programmer doesnt want to typescript on particular value
//user noImplicitAny to flag any implicit any error
let hero;

function getHero() {
    return "thor";
}

hero = getHero();


//to skip error
export {}
// const superHeros = [];
// superHeros.push('spiderman');
// By default the superHeros array is set to never as it's emply
// whenever string is passed, Ts throws an error as string shouldnt be added to never

//How to solve it?
const superHeros: string[] = [];
// const heroPowers: number[] = [];
//Atlernative way
const heroPowers: Array<number> = [];
superHeros.push("Spiderman");
heroPowers.push(2)

//Type Alias
//Array of Objects
type User = {
    name: string,
    isActive: boolean,
}
const allUser: User[] = [];
allUser.push({name: "User1", isActive: true});
console.log(allUser);
allUser.push({name: "User2", isActive: false})
console.log(allUser);

//n-d Array array of array
const MLModels: number [][] = [
    [555,255,255], [0,0,0]
]

export {}
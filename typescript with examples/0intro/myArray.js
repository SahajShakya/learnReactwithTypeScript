"use strict";
// const superHeros = [];
// superHeros.push('spiderman');
// By default the superHeros array is set to never as it's emply
// whenever string is passed, Ts throws an error as string shouldnt be added to never
Object.defineProperty(exports, "__esModule", { value: true });
//How to solve it?
var superHeros = [];
// const heroPowers: number[] = [];
//Atlernative way
var heroPowers = [];
superHeros.push("Spiderman");
heroPowers.push(2);
var allUser = [];
allUser.push({ name: "User1", isActive: true });
console.log(allUser);
allUser.push({ name: "User2", isActive: false });
console.log(allUser);

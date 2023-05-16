//combination of one or more variable data
var score = 33;
console.log(score);
score = 44;
console.log(score);
score = 'aa';
console.log(score);
var sahaj = { name: "Sahaj", id: 334, role: "User" };
console.log(sahaj);
sahaj = { username: "S@Z", id: 334, role: "Admin" };
console.log(sahaj);
function getDbId(id) {
    console.log("DB id is ".concat(id));
}
getDbId(3);
getDbId("3");
//Problem arises if there is operation inside the function
function getDb(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id + 2);
    }
}
getDb(3);
getDb("S");
//Array
var data = [1, 2, 3];
console.log(data);
var data2 = ["1", "2", "3", "4"];
console.log(data2);
//what is array has both type
var data3 = [1, 2, "3"];
console.log(data3);
//const data3: string [] | number [] = [1,2,"3"];
//Not same => 2nd one says either string or num

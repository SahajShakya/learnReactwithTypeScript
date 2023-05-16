// const user: ( string | number )[] = ['kai',1]
let tupleUser: [string, number, boolean]
tupleUser = ["kai", 123, true]
//Restrict to the samme pattern descibe
// tupleUser = [123,"kai", true]
//Error for above
// const tupleUser1: [string, number, boolean] = ["kai", 123, true]

//However it can be manipulated
//TS can't catch tuple array type
//const tupleUser1: [string, number] = ["kai", 123, true]


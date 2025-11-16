//Array
const name :string[] = ["uttam","ali","nuru"]
name.push("")

//tuple      //var e redeclare kora jay, const and let e jayna,, const e reassign kora jay na, ar var hocche function scope
var StudentDetails: [string,string,number] = ["uttam","sharma",10]

var StudentDetails1: (string | number)[] = ["uttam","sharma",95]



//object , literal type , access modifier
const person : {
    // Organization: string;
    // Organization: "Programming Hero"  //value => type = Literal type(so not notun name assignable)
    readonly Organization:string     //access Modifier
    firstName : string;
    middleName ?: string;
    lastName: string,
    isMarried:boolean
} = {
    Organization: "Programming Hero",
    firstName : "Uttam ",
    lastName : "Sharma",
    isMarried : true
}
person.Organization = "Programming Hero Lite"
console.log(person)








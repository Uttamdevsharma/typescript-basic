//Array
const name :string[] = ["uttam","ali","nuru"]
name.push("")

//tuple      //var e redeclare kora jay, const and let e jayna,, const e reassign kora jay na, ar var hocche function scope
var StudentDetails: [string,string,number] = ["uttam","sharma",10]

var StudentDetails1: (string | number)[] = ["uttam","sharma",95]



//object , literal type , access modifier
const person1 : {
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
person1.Organization = "Programming Hero Lite"
console.log(person)




//function

//normal function
function add(num1 :number,num2:number):number {
    return num1 + num2
}
add(2,4)


//arrow function
const addArrow = (num1:number,num2:number) : number => num1 + num2
addArrow(2,8)

// method function
const person = {
    name : "Uttam Sharma",
    balance : 0,
    addBalance(value : number){
        const newBalance = value + this.balance
        return newBalance
    }
}

person.addBalance(10)


//callback function
const arr : number[] = [1,2,3,4,5]
const arrSquare = arr.map((ele : number) => ele * ele)
console.log(arrSquare)







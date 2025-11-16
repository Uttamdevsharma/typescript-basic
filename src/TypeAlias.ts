
//object type alias
type User = {
    id : number,
    name : {
        firstName : string,
        lastName : string
    },
    gender : 'male' | 'female',
    address : {
        division : string,
        city:string
    }
}

const person : User = {
    id : 123,
    name : {
        firstName : "Uttam Sharma",
        lastName : "Dev"
    },
    gender : "male",
    address : {
        division : 'Dhaka',
        city : 'dhaka'
    }
}

const person2 : User = {
    id : 12345,
    name : {
        firstName : "Alif",
        lastName : "Hossain"
    },
    gender : "male",
    address : {
        division : 'Dhaka',
        city : 'dhaka'
    }
}
console.log(person)


//variable type casting
type Name = string
const name : Name = "Uttam sharma"

//FUNCNTION TYPE ALIAS

type addFun = (num1: number , num2: number) => number
const add : addFun = (num1,num2) => num1 + num2




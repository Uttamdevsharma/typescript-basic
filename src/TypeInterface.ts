//N.B : Interface use - object type - array,Function,object
//sadharonoto array and function jonno type  use korbo ar object er jonno interface ba type jeita subidha use



//Interface with object
type User = {
    name :string,
    age : number
}

type Role = {
    role : 'user' | 'admin'   //literal type
}

type UserWithRole = User & Role

interface IUser {
    name : string,
    age : number
}


interface IUserWithRole extends IUser {
    role : 'user' | 'admin'
}


const person :IUserWithRole  = {
    name : "Uttam Sharma",
    age : 25,
    role : 'user'
}








//Interface with array

type Friends = string[]

interface IFriends {
    [index : number] :string
}

const friends:IFriends = ["Uttam","Alif","Nuru"]




//INterface with function
type Add = (num1:number , num2:number) => number

interface IAdd {
    (num1:number ,num2:number) :number
}
//interface with function
const add :IAdd =(num1,num2) => {
    return num1 + num2
}

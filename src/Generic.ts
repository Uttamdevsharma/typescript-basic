
//for primitive 
type GenericArray<value> = Array<value>

const person :GenericArray<string> = ["Uttam","Nuru","Alif"]

const mark :GenericArray<number> = [10,20,30,40]

const isValid: GenericArray<boolean> = [true,false,true,false]




//for tuple
type Mark<X,Y> = [X,Y]
const mark : Mark<number,number> = [60,60]



//for Array of object

type User = {
    name :string,
    age:number
}
const person : GenericArray<User> =[
    {
        name : "Uttam Sharma",
        age : 25
        
    },
    {
        name : "Alif HOssain",
        age : 26
    }


]


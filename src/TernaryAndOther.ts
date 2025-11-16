//Ternary Operator
// nulish coalescing operator - null and undefined


//ternary operator
const user1 = (age : number)=>{
    const res = age > 20 ? "You are eligible" : "not eligible"
    return res
}

const res = user1(21)
console.log(res)



// nulish coalescing 

const userTheme = undefined
const selectTheme = userTheme ?? "LIght Theme"

console.log(selectTheme)




//optional chaining
const user :{
    id :number;
    name : string;
    city? : string
} = {
    id : 123,
    name : "Uttam Sharma"
}

const city  = user?.city
console.log(city)
const person = {
    id : 123,
    name : {
        firstName : "Uttam",
        middleName : "Kumar",
        lastName : "Sharma"

    },
    favouriteColor: "black"
   
}
const {favouriteColor , name:{lastName}} = person
console.log(favouriteColor,lastName)



const friends : string[] = ["uttam","nuru","alif"]
const [a,b,c] = friends
console.log(b)
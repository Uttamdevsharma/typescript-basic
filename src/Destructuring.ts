const person = {
    id : 123,
    name : {
        firstName : "Uttam",
        middleName : "Kumar",
        lastName : "Sharma"

    },
    favouriteColor: "black"
   
}
const {favouriteColor : myfavouriteColor , name:{lastName}} = person   //use name alias
console.log(myfavouriteColor,lastName)



const friends : string[] = ["uttam","nuru","alif"]
const [a,b,c] = friends
console.log(b)
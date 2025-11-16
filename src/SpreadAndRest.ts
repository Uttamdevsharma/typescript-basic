//spread operator 
const friends :string[] = ["nipun","reday"]
const schoolFriends: string[] = ["bormon","himel"]
const collegeFriends: string[] = ["reday","akash","partho","nuru"]

friends.push(...schoolFriends)
console.log(friends)




//spread operator - object
const person1 = {
    name : "Uttam sharma",
}

const otherInfo = {
    id : 221902234,
    add : "dinajpur"
}

const userInfo = { ...person1 , ...otherInfo}
console.log(userInfo)


//Rest operator
const person = (...friends :string[]) => {
    friends.forEach((friend : String) => console.log(`Invite to ${friend}`))
    

}
person("uttam","alif","NURU")
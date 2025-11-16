//spread operator 
const friends :string[] = ["nipun","reday"]
const schoolFriends: string[] = ["bormon","himel"]
const collegeFriends: string[] = ["reday","akash","partho","nuru"]

friends.push(...schoolFriends)
console.log(friends)




//spread operator - object
const person = {
    name : "Uttam sharma",
}

const otherInfo = {
    id : 221902234,
    add : "dinajpur"
}

const userInfo = { ...person , ...otherInfo}
console.log(userInfo)
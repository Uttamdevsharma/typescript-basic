
type User = {
    name : string
    age : number
}

const user :User = {
    name : "Uttam Sharma",
    age : 25
}

const updateUser = (userInfo : Partial<User>)=>{
    console.log("Updated", userInfo)
}

const res = updateUser({name : "utt"})
console.log(res)
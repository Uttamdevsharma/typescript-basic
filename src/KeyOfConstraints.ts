const getPropertyFromObject = <T>(obj :T , key : keyof T ) => {
    return obj[key]
}

const person = {
    name : "Uttam Sharma",
    id : 123,
    age : 14
}

const student = {
    name : "Riddi",
    id : 1234,
    like : "music"
}

const res1 = getPropertyFromObject(person,"name")
console.log(res1)


const res2 = getPropertyFromObject(student,"like")
console.log(res2)


// const createArrayWithGeneric = <T>(value : T) => {
//       return [value]
// }

// const arrString = createArrayWithGeneric("Apple")
// console.log(arrString)





//tuple
const createArrayTupleWithGeneric =<T,X> (param1:T,param2:X) => {
    return [param1,param2]

}

const res = createArrayTupleWithGeneric("Uttam",45)
console.log(res)




//Function
const addStudentToCourse = <T>(studentInfo : T) => {
    return {
        course : "Next level",
        ...studentInfo
    }
}

const student1 = addStudentToCourse({
    name : "Uttam Sharma",
    age : 24
})

console.log(student1)
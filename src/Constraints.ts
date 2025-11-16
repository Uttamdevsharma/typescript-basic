type ContraintsaddStudent = {
    name : string,
    id: number
}

const addStudentToCourse = <T extends ContraintsaddStudent >(studentInfo: T) => {
    return {
        course : "Next Level",
        ...studentInfo
    }

}

const student1 = {
    id : 123,
    name : "Uttam sharma",
    age : 25
}
const student2 = {
    name : "Riddi",
    id : 1234,
    age : 23
}

const res = addStudentToCourse(student2)
console.log(res)
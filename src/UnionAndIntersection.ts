//union operator
type Role = 'user' | 'admin' | 'manager'

function dashboard(role : Role){
    if(role === 'admin'){
        return "admin dashboard"
    }else if(role === 'user'){
        return "user dashboard"
    }else{
        return "manager dashboard"
    }
}
dashboard('admin')





//Intersection & 
type Employee = {
    id : string,
    name : string
}

type Manager = {
    team : string
}

type EmployeeAndTeam = Employee & Manager

const EmAndManager : EmployeeAndTeam = {
    id : "123",
    name : "Uttam",
    team : 'green'

}
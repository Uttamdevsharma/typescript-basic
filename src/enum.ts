enum userRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const accessRole = (role : string) => {
    if(role === userRoles.Admin || role === userRoles.Editor){
        return true
    }else return false
}

const res1 = accessRole("Admin")
console.log(res1)
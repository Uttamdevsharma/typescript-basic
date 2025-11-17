

type Area<T> = {
    [key in keyof T] : T[key]
}




const area : Area<{
    height : number
    width : boolean
}> = {
    height : 100,
    width : true,

}
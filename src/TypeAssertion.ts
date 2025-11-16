
// let anything:any
// anything = 222;

// (anything as number).toFixed


const kgtoGMConverter = (input:string|number ) => {

    if(typeof input === 'number'){
        const res = input * 1000;
        return res
    }else if(typeof input === 'string'){
        const resSplit = input.split(" ")[0]
        return `Converted output is ${resSplit * 1000}`
    }

}


const result1 = (kgtoGMConverter(20) as number)
result1.toFixed(2)

console.log(result1)
const result2 = (kgtoGMConverter("20 kg") as string)
result2.
console.log({result2})


type CustomError = {
    message : string
}

try{

}catch(err){
    console.log((err as CustomError).message)

}


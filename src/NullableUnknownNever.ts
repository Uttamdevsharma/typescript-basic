
//nullable

// const getUser = (user: string | null) => {
//     if(user){
//         console.log(`From db : ${user}`)
//     }else{
//         console.log("All users")
//     }
// }

// getUser("")



//unknown

const discountCalculated = (price : unknown) => {
    if(typeof price === 'number'){
        const discount = price * 0.1
        console.log(discount)
    }else if(typeof price === 'string'){
        const priceSplit = price.split(" ")[0]
        console.log(priceSplit * 0.1)
    }else {
        console.log("Wrong input")
    }
}

discountCalculated(100)
discountCalculated("100 TK")
discountCalculated(null)


//never

const getUser = (msg :string )=>{
    throw new Error(msg)
}

getUser("Error...")


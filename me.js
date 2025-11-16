let person = {
    name : "Uttam Sharma",
    addr : {
        city : 'dhaka',
        zip : 1800
    },
    interest : ['js','typescript','php'],
    printInterest(){
        this.interest.forEach((el) => {
            console.log(this.name + 'Love' + el)
        })
    }
}

person.printInterest()
/* Trabalhando com classe */
/*Métodos de uma classe */
class car{
    constructor(nameCar, year){
        this.nameCar = nameCar;
        this.year = year;
    }
    yearCar(year){
        return year - this.year;
    }
}

let today = new Date();
let year = today.getFullYear();
let myCar1 = new car("Celta", 1999);

console.log(myCar1.yearCar(year));


/* Outro exemplo */
class registration{
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = new Date(age);
    }
    getBirthYear(){
        return this.age.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.LastName}`;
    }
}

let FirstRegistration = new registration("Daniel", "Lau", 1980)

console.log(FirstRegistration)
console.log(FirstRegistration.age.getFullYear())
console.log(FirstRegistration.getBirthYear())
console.log(FirstRegistration.getFullName())

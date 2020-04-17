literal
Constructor
Object.create


///literal
var country ={
    name:'India',
    capital:'Delhi',
    population:9789787
}
undefined
typeof(country)
"object"
country.name
"India"
country.capital
"Delhi"
country['population']
9789787
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 9789787, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "Hindi"}
country.language="English"
"English"
country
{name: "India", capital: "Delhi", language: "English"}

///////////
Constructor
/////////

var car = new Object()
undefined
car 
{}
car.name="Gwagen"
"Gwagen"
car['brand']="Merc"
"Merc"
car.price=7868876
7868876
car
{name: "Gwagen", brand: "Merc", price: 7868876}
car.price=['yghyyg',34,'fbgr']
(3) ["yghyyg", 34, "fbgr"]
car
{name: "Gwagen", brand: "Merc", price: Array(3)}
car.price
(3) ["yghyyg", 34, "fbgr"]


var sayHi={
    firstname:'John',
    lastName:'Eva',
    greet:function(){
        return "Hi Welcome to object"
    }
}

sayHi.greet()
"Hi Welcome to object"

var firstname='Ammy'
var lastName='jackson'

var sayHi={
    firstname:'John',
    lastName:'Eva',
    greet:function(){
        return `Hi ${this.firstname}  ${this.lastname} Welcome to object`
    }
}


var calc={
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b},
}


calc.sub(1,2)
-1
calc.sum(1,2)
3
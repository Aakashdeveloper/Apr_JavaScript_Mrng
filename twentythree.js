function human(name){
    this.name= name
    this.city = 'NewYork'
}


function robot(name){
    this.name = name;
    this.legs = 2;
    this.color= "white"
}

var John = new human('john')
var Robot = new robot('Pepper')

John
human {name: "john", city: "NewYork"}
Robot
robot {name: "Pepper", legs: 2, color: "white"}



//es5
function human(name){
    this.name= name
    this.city = 'NewYork'
}


function robot(name){
    this.name = name;
    this.legs = 2;
    this.color= "white"
}


human.prototype = new robot()
robot.prototype = new human()
var John = new human('john')
var Robot = new robot('Pepper')

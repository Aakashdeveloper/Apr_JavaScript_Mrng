function calc(){
    this.sum=(a,b)=>{return a+b},
    this.sub=(a,b)=>{return a-b}
}

var mycalc = new calc();
mycalc.sub(2,1)


var bob = new Object();
bob.age = 10;
bob.city="Newyork";
bob.setAge = function(newAge){
    bob.age = newAge
}
bob.age
10
bob.setAge(12)
undefined
bob
{age: 12, city: "Newyork", setAge: ƒ}

var tony = new Object();
tony.age = 10;
tony.city="Newyork";
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city="Newyork";
bob.setAge = createAge

var tony = new Object();
tony.age = 10;
tony.city="Newyork";
tony.setAge = createAge

bob.setAge(10)



var movies = {
    name:"Avngers",
    rate:4.5
}

var x;
for(x in movies){
    //console.log(x)
    console.log(movies[x])
}


null => in return when thing does not exist
undefined => something is not defined
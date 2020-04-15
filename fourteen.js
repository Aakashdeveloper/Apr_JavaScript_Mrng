var a = 10
var b = 20
a+b 

//function
//es5
function add(a,b){
    return a+b
}

add(1,2)
add(1,2)
3
add('a','b')
"ab"


function add(a,b){
    var sum = a+b
    var sub = a-b
    var output =[ sum,sub]
    return output
}

undefined
add(5,4)
(2) [9, 1]

function calc(a,b,opt){
    var out;
    if(opt=="+"){
        out = a+b
    }else{
        out = a-b
    }

    return out
}

calc(1,3,"+")
4
calc(1,3,"-")
-2

var a = [3,5,7,8,2,1,6,7,1]
function isEven(userInput){
    for(i=0;i<userInput.length;i++){
        if(userInput[i]%2==0){
            console.log(`${userInput[i]} is even`)
        }else{
            console.log(`${userInput[i]} is odd`)
        }
    }
}

isEven(a)
VM439:6 3 is odd
VM439:6 5 is odd
VM439:6 7 is odd
VM439:4 8 is even
VM439:4 2 is even
VM439:4 6 is even
VM439:6 7 is odd
VM439:6 1 is odd


function isEven(userInput){
    var output = []
    for(i=0;i<userInput.length;i++){
        if(userInput[i]%2==0){
            output.push("Even")
        }else{
            output.push("Odd")
        }
    }
    return output
}
var a = [3,5,7,8,2,1,6,7,1]
isEven(a)
(9) ["Odd", "Odd", "Odd", "Even", "Even", "Odd", "Even", "Odd", "Odd"]


////Method
var isEven = function(userInput){
    var output = []
    for(i=0;i<userInput.length;i++){
        if(userInput[i]%2==0){
            output.push("Even")
        }else{
            output.push("Odd")
        }
    }
    return output
}


var a = [3,5,7,8,2,1,6,7,1]
isEven(a)
(9) ["Odd", "Odd", "Odd", "Even", "Even", "Odd", "Even", "Odd", "Odd"]



//Es6 Arrow Function
var add = (a,b) => {return a+b}
add(1,2)

var isEven = (userInput) => {
    var output = []
    for(i=0;i<userInput.length;i++){
        if(userInput[i]%2==0){
            output.push("Even")
        }else{
            output.push("Odd")
        }
    }
    return output
}

var a = [3,5,7,8,2,1,6,7,1]
isEven(a)
(9) ["Odd", "Odd", "Odd", "Even", "Even", "Odd", "Even", "Odd", "Odd"]

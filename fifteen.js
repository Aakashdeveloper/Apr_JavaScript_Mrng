/*function sayHi(){
    return "Hi To JavaScript"
}

console.log(sayHi())
*/

// IIFE
(function(){
    console.log("Hi To JavaScript from IIFE")
}())


function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
looping(5)
VM87:3 0
VM87:3 1
VM87:3 2
VM87:3 3
VM87:3 4

//Generator

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}
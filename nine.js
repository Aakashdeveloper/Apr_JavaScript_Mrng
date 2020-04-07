if
else

var a = 10
if(a%2==0){
    console.log('Number is even')
}else{
    console.log('Number iis odd')
}

var a = 10
if(a%2==0){
    console.log('Number is even')
}else if(a%3==0) {
    console.log('Number is divisble by 3')
}
else{
    console.log('Number iis odd')
}

var a = 12
if(a%2==0){
    console.log('Number is even')
}else if(a%3==0) {
    console.log('Number is divisble by 3')
}
else{
    console.log('Number iis odd')
}

var a = 12
if(a%2==0 || a%3==0){
    console.log('Number is even')
}else if(a%3==0) {
    console.log('Number is divisble by 3')
}
else{
    console.log('Number iis odd')
}

var a = 12
if(a%2==0){
    console.log('Number is even')
}
if(a%3==0) {
    console.log('Number is divisble by 3')
}
else{
    console.log('Number iis odd')
}
VM1143:3 Number is even
VM1143:6 Number is divisble by 3

//Ternery

var a = "john"

a=="John"?"Welcome":"I dont know you"

var a = "john"

a=="John"?"Welcome":"I dont know you"
"I dont know you"
var a = "john"

a=="john"?"Welcome":"I dont know you"
"Welcome"
var a = 10
undefined
a>10?a+1:a-1
9
a==10?a+1:a-1
11


var name = "JoHn"
var validate = "John"

name.toLowerCase()==validate.toLowerCase()?"Welcome":"I dont know you"


/*
Luck Game
Generate  one number between 1 to 20
Take on input from user
if both match than user win else loose
*/
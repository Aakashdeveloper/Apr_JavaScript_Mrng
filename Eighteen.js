var a = ['a','b','c','d']
for(i=0;i<a.length;i++){
    console.log(i)
}

var a = ['a','b','c','d']
a.map((data) => { return data})

//iterate+operation
//map always return same length of array
var a = [4,5,6,2,3,4]
a.map((item) => {return  item+1})
[5,6,7,3,4,5]


var b = [34,23,67,45,19,32]
a.filter((data) => { return data>30})
[34,67,45,32]
//Filter only return those value for which condition is true
//filter may or may not return same length of array
var b = [34,23,67,45,19,32]
b.map((data) => { return data>30})
(6) [true, false, true, true, false, true]
var a = [4,5,6,2,3,4]
a.filter((item) => {return  item+1})
(6) [4, 5, 6, 2, 3, 4]



var a = [0,1,2,3]
a.filter((item) => {return  item*1})
a.map((item) => { item*1})

var a = [0,1,2,3]
a.filter((item) => {return  item*1})
(3) [1, 2, 3]
a.map((item) => {return  item*1})
(4) [0, 1, 2, 3]



var a = "sfwge"
a.map((data) => {return  data})
var a  = ["a","b","c"]
var b =[1,2,3,5,6]
var c = [true, false,false]


var d = [2,3,"f",true,false,6,"d"]
var d = [2,3,"f",true,false,6,"d"]
undefined
d.length
7
d[0]
2
d[1]
3
d[d.length-1]
"d"

Push=> Insert record always at the end of array
Pop=> Take out always last value from the array
shift => take out first value from the array
unshift => insert  first value in the array

var city = ['London','NewYork','Delhi']
var city = ['London','NewYork','Delhi']
undefined
city.push('Helsinki')
4
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]
city.push('Mumbai')
5
city.push('Boston')
6
city
(6) ["London", "NewYork", "Delhi", "Helsinki", "Mumbai", "Boston"]
city.pop()
"Boston"
city.pop(3)
"Mumbai"

sayHi.firstnamee
"John"
sayHi.greet()
"Hi To JavaScript"


var city = ["London", "NewYork", "Delhi", "Helsinki", "Mumbai", "Boston"]
var city = ["London", "NewYork", "Delhi", "Helsinki", "Mumbai", "Boston"]
undefined
city.slice(1)
(5) ["NewYork", "Delhi", "Helsinki", "Mumbai", "Boston"]
city
(6) ["London", "NewYork", "Delhi", "Helsinki", "Mumbai", "Boston"]
city.slice(2,5)
(3) ["Delhi", "Helsinki", "Mumbai"]
city.splice(2,0,'Paris','Boston')
[]
city
(8) ["London", "NewYork", "Paris", "Boston", "Delhi", "Helsinki", "Mumbai", "Boston"]
city.splice(2,1)
["Paris"]
city
(7) ["London", "NewYork", "Boston", "Delhi", "Helsinki", "Mumbai", "Boston"]
city.splice(3,1,'Nice','InnsBurg')
["Delhi"]
city
(8) ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]
var city = ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]
undefined
city.indexOf('London')
0
city.indexOf('Mumbai')
6
city.indexOf('Delhi')
-1
city.indexOf('Pune')
-1

var a = "London,NewYork,Boston,Nice,InnsBurg"
a.split(',')


var url="https://us-east-2.console.aws.amazon.com/rds/home/region/us-east-2"
url.split('/')

var name="JavaScript"
name.split("")
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var a = [1,2,3]
var b = ['a','b','c']
var a = [1,2,3]
var b = ['a','b','c']
undefined
a+b
"1,2,3a,b,c"
a.concat(b)
(6) [1, 2, 3, "a", "b", "c"]
b.concat(a)
(6) ["a", "b", "c", 1, 2, 3]
var c = ['d','d','d']
undefined
a.concat(b,c)
(9) [1, 2, 3, "a", "b", "c", "d", "d", "d"]

var city = ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]

undefined
city.sort()
(8) ["Boston", "Boston", "Helsinki", "InnsBurg", "London", "Mumbai", "NewYork", "Nice"]
city.reverse()
(8) ["Nice", "NewYork", "Mumbai", "London", "InnsBurg", "Helsinki", "Boston", "Boston"]
city.sort().reverse()
(8) ["Nice", "NewYork", "Mumbai", "London", "InnsBurg", "Helsinki", "Boston", "Boston"]
var city = ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]
undefined
city.includes('Delhi')
false
city.includes('Mumbai')
true


function checkval(val,index,array){
    return val>2
}

console.log([2,6,4,7,9].some(checkval))
VM1152:5 true

undefined
function checkval(val,index,array){
    return val>2
}

console.log([0,1,1].some(checkval))
VM1162:5 false

var a = ['a','b','c',[1,2,3,['aa','bb'],'d'],'ff']
undefined
a[3]
(5) [1, 2, 3, Array(2), "d"]
a[3][3]
(2) ["aa", "bb"]
a[3][3][0]
"aa"

var a = ['a','b','c',[1,2,3,['aa','bb'],'d'],'ff']
undefined
a.flat()
(9) ["a", "b", "c", 1, 2, 3, Array(2), "d", "ff"]
a.flat(22)
(10) ["a", "b", "c", 1, 2, 3, "aa", "bb", "d", "ff"]
a.flat(2)
(10) ["a", "b", "c", 1, 2, 3, "aa", "bb", "d", "ff"]
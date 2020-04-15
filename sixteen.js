var 
let 
const


> var a= 0
undefined
> var a= 10
undefined
> a
10
> var a= 220
undefined
> a
220
> a = 30
30


var a = 10
var b = 20

var a;
var b;
a=10
b=20

declare 
assignment

var = we can redeclare and reassign
let = we cannot redeclare but can reassign
const = we cannot redeclare nor reassign


> var a= 0
undefined
> var a= 10
undefined
> a
10
> var a= 220
undefined
> a
220
> a = 30
30
> a = 30

///////
> let b = 20
undefined
> b
20
> let b = 21
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 21
21
> b
21


/////
> const d = "hii"
undefined
> d
'hii'
> const d = "bie"
Thrown:
SyntaxError: Identifier 'd' has already been declared
> d = "bie"
Thrown:
TypeError: Assignment to constant variable.
> 

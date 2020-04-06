var city = "london"
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london";
city.length
6
city.charAt(0)
"l"
city[0]
"l"
var name = "    John   "
undefined
name.length
11
name.trim()
"John"
var name = "    John  . "
undefined
name.trim()
"John  ."
var city = "amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2,4)
"st"
city.slice(2,5)
"Ste"
city.slice(2,1100)
"SterDam"

var city = "amSterDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "amSterDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"

slice(start,end)
> if first value is -ve that output is blank 
> if second is -ve and first is +ve than it wiill remove from both direction
> if only one -ve value than start removing from backward

substring(start,end)
> don't work on -ve value

substr(start,length)
> iin case of -ve it remove from backward direction


city.substring(1)
"mSterDam"
city.substring(2,5)
"Ste"
city.substr(1)
"mSterDam"
city.substr(2)
"SterDam"
city.substr(1,3)
"mSt"
city.substr(2,5)
"SterD"

var city = "amSterDam"
undefined
city.slice(2,-2)
"SterD"
city.slice(-2,2)
""
city.slice(-3)
"Dam"
city.slice(-4)
"rDam"

city.substring(2,-2)
"am"
city.substring(2,-3)
"am"
city.substring(3,-2)
"amS"
city.substring(4,-2)
"amSt"
city.substring(-2,4)
"amSt"
city.substring(-2,3)
"amS"
city.substring(-1,3)
"amS"
city.substr(-1,2)
"m"
city.substr(-22,2)
"am"
city.substr(-2,2)
"am"
city.substr(-2,5)
"am"
city.substr(-4,5)
"rDam"
city.substr(-4)
"rDam"



var a = "   Hi i am doing Js  "
var a = "   Hi i am doing Js  "
undefined
a.trim()
"Hi i am doing Js"
a.trim().toUpperCase()
"HI I AM DOING JS"

var a = "   Hi i am doing Js  "
a.trim()
"Hi i am doing Js"
"Hi i am doing Js"
a.replace('Js','JavaScript')
"   Hi i am doing JavaScript  "
a.replace('a','A')
"   Hi i Am doing Js  "
a.replace(/a/g,'A')
"   Hi i Am doing Js  "
a.replace(/i/g,'I')
"   HI I am doIng Js  "
a.replace('i','I')
"   HI i am doing Js  "
a.replace(/i/g,'I')
"   HI I am doIng Js  "

var a = "   Hi i am doing Js  "
undefined
a.trim().replace(/ /g,'_')
"Hi_i_am_doing_Js"
a.trim().replace(/ /g,'')
"HiiamdoingJs"
a.replace(/ /g,'')
"HiiamdoingJs"
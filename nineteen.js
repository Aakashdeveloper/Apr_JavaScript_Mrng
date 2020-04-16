//////////
  RegExp
///////////

var a = "john";

^([a-z])$

var a = "john";
a.match("^([a-z])$")
null
var a = "j";
a.match("^([a-z])$")
(2) ["j", "j", index: 0, input: "j", groups: undefined]
var a = "J";
a.match("^([a-z])$")
null
var a = "J";
a.match("^([a-z]+)$")
null
var a = "john";
a.match("^([a-z]+)$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]


//String number of any length
var a = "767jku khiui"
a.match("^([a-zA-Z0-9]+)$")
null
var a = "767jkukhiui"
a.match("^([a-zA-Z0-9]+)$")
(2) ["767jkukhiui", "767jkukhiui", index: 0, input: "767jkukhiui", groups: undefined]


//only 10 digit
var a = "1234567890"
"^([0-9]{10})$"

//Email
var email = "a@a.com"
"^([a-zA-Z0-9_-]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$"
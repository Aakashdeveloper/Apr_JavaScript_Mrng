for
while
do while
for in
for of
Map
filter 


//For simple iteration
for(i=0;i<10;i++){
    console.log(i)
}

var city = ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["London", "NewYork",[1,2,3], "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]
for(i=0;i<city.length;i++){
    //console.log(Array.isArray(city[i]))
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}


/////while loop check condition first
var i = 0;
while(i<10){
    console.log(i);
    i++
}

var city = ["London", "NewYork",[1,2,3], "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]


var i = 0;
while(i<city.length){
    console.log(city[i]);
    i++
}


////Do While check condition later
var city = ["London", "NewYork",[1,2,3], "Boston", "Nice", "InnsBurg", "Helsinki", "Mumbai", "Boston"]

var i = 0;
do{
    console.log(city[i]);
    i++
}
while(i<city.length)


////for of
var cities = ["London", "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki"]
for(city of cities){
    console.log(city)
}

var cities = ["London",[22,3,3], "NewYork", "Boston", "Nice", "InnsBurg", "Helsinki"]
for(city of cities){
    if(Array.isArray(city)){
        for(a of city){
            console.log(a)
        }
    }
    else{
        console.log(city)
    }
    
}

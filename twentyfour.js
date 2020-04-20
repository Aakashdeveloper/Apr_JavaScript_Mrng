function langauage(name,country){
    this.name=name;
    this.country=country
}

var hindi = new langauage('Hindi','India')
hindi
langauage {name: "Hindi", country: "India"}

/////////es6////////
class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long = long;
    }
}

class langauage1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country 
    }

    add(){

    }
}


var english = new langauage1('English','USA')
english
langauage1 {name: "English", country: "USA"}
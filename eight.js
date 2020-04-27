Date()
"Tue Apr 07 2020 02:54:42 GMT+0100 (British Summer Time)"
new Date().getDate()
7
new Date().getMonth()
3
new Date().getDay()
2

switch(new Date().getDay()){
    case 1:
        console.log('Today is monday')
        break;
    case 2:
        console.log('Today is tuesday')
        break;
    case 3:
        console.log('Today is Wednesday')
        break;
    default:
        console.log('I dont know')  
}


var name="john"

switch(name){
    case 'aakash':
        console.log('You are normal User')
        break;
    case 'john':
        console.log('You are admin User')
        break;
    default:
        console.log('I Dont know')
        break;
}
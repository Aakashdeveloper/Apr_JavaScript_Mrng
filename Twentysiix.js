function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var output;
    //output = (opt == "add"? parseFloat(a)+parseFloat(b):parseFloat(a)-parseFloat(b));
    if(opt=="add"){
        output = parseFloat(a)+parseFloat(b);
    }else{
        output = parseFloat(a)-parseFloat(b);
    }
    document.getElementsByClassName('output')[0].innerText = output
}
/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var output = parseFloat(a)+parseFloat(b);
    document.getElementsByClassName('output')[0].innerText = output
}
const sub = () => {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var output = parseFloat(a)-parseFloat(b);
    document.getElementsByClassName('output')[0].innerText = output
}*/
var url = "https://api.exchangeratesapi.io/latest?base=";

async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    let response = await fetch(`${url}${base}`, {method:'GET'})
    let data = await response.json();
    final = data.rates
    final = `${output} ${final[output] * parseFloat(amount)}`
    var result =`Convert value of ${base} ${amount} is ${final}`
    document.getElementById('converted').innerText=result;
}



/*
function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`, {method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates
        final = `${output} ${final[output] * parseFloat(amount)}`
        var result =`Convert value of ${base} ${amount} is ${final}`
        document.getElementById('converted').innerText=result;
    })
}
*/

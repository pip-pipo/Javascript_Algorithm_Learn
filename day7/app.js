function create(text){
    return text.split('').map(showData).join('')
}

function showData(data){
    if(data.toUpperCase()===data){
        return data.toLowerCase()
    }
    return data.toUpperCase()
}

console.log(create('Hello WORLD'));
// output hELLO world

console.log(create('HELLO world'))

//output hello WORLD
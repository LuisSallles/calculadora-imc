function isData(n, h, w) { // Funtion to check if it has dates on input
    if(n.length === 0 || h === 0 || w === 0) {
        return false 
    } else {
        return true
    }
}

function calculate() { // Function to calculate the IMC
    const name = String(document.getElementById('txtname').value)
    const height = Number(document.getElementById('txtheight').value)
    const weight = Number(document.getElementById('txtweight').value)
    let result = document.getElementById('calculator-result')
    const imc = weight / (height * height) // IMC calculate

    if(isData(name, height, weight)) {
        if(imc < 18.5) { // Here it will be evaluated if the person has a good IMC
            result.style.color = 'red' // Under IMC
            result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are underweigth! :(</p>`
        } else if (imc < 25) { 
            result.style.color = 'green' // Good IMC
            result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are healthy! :)</p>`
        } else {
            result.style.color = 'red' // Over IMC
            result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are overweigth! :(</p>` 
        } 
    } else {
        result.style.color = 'white'
        result.innerHTML = `<p>Fill in all the datas above!</p>`
    }
}

function clearThis(target) { // Function to clean the inputs
    target.value = ''
}


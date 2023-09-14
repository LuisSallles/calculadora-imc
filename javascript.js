function calculate() { // Function to calculate the IMC
    const name = String(document.getElementById('txtname').value)
    const height = Number(document.getElementById('txtheight').value)
    const weight = Number(document.getElementById('txtweight').value)
    let result = document.getElementById('calculator-result')
    const imc = weight / (height * height) // IMC calculate
    if(imc < 18.5) { // Here it will be evaluated if the person has a good IMC
        result.style.color = 'red'
        result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are underweigth! :(</p>`  // Under IMC
    } else if (imc < 25) {
        result.style.color = 'green'
        result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are healthy! :)</p>` // Good IMC
    } else {
        result.style.color = 'red'
        result.innerHTML = `<p>${name}, your IMC is ${imc.toPrecision(2)} and you are overweigth! :(</p>` // Over IMC
    } 
}

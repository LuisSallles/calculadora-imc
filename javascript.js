function parseImc(i) {
    let height = Number(document.getElementById('txtheight').value)
    let weight = Number(document.getElementById('txtweight').value)
    let imc = weight / (height * height)
    return Math.floor(imc) 
}

function calculate() {
    let name = String(document.getElementById('txtname').value)
    parseImc(result)
    let result = document.getElementById('calculator-result').innerHTML = `${result}`
}

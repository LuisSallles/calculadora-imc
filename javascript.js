// Function to calculate the IMC
function calculate() {
    const name = String(document.getElementById('txtname').value)
    const height = Number(document.getElementById('txtheight').value)
    const weight = Number(document.getElementById('txtweight').value)
    const imc = weight / (height * height)
    let result = document.getElementById('calculator-result')
}

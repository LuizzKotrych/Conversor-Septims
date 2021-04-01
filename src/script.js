var valorEmSeptimTexto = prompt("Qual o valor em Septim que você quer converter?")
var valorEmSeptimNumero = parseFloat(valorEmSeptimTexto)
var valorEmReal = valorEmSeptimNumero * 308.00
var valorEmRealFixado = valorEmReal.toFixed(2)
alert(valorEmRealFixado)
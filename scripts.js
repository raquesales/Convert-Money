const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
// pega o botão

const dolar = 5
const euro = 6

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    // pega o valor do input. Se não tivesse '.value' pegava todos os atributos

    const refreshReal = document.getElementById('real')
    //refreshReal.innerHTML = inputReais  >> convertendo para moeda >>>

    refreshReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    const convertMoney = document.getElementById('convert-currency')
    // valor em moeda  >>>
    if (select.value === 'U$$ Dólar Americano') {
        convertMoney.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }
    if (select.value === '€ Euro') {
        convertMoney.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    // função para converter os valores
    //console.log(inputReais/dolar)
}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.jpg'
    }
    if (select.value === 'U$$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar'
        currencyImg.src = './assets/eua.jpg'
    }
    convertValues()
}
button.addEventListener('click', convertValues) // "escuta" quando o botão é clicado (evento) e chama a função
select.addEventListener('change', changeCurrency) // para mudança no select

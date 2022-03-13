const select_left = document.querySelector('#select-left')
const select_right = document.querySelector('#select-right')

const $button = document.querySelector('.main-button')
$button.addEventListener('click', clickButton)

const fail_text = document.querySelector('#fail-text')
const input_left = document.querySelector('#input-left')

function clickButton(event) {
  event.preventDefault()
  fail_text.textContent = ''
  let inputValue = 0
  if (input_left.value.includes(',')) {
    inputValue = input_left.value.replace(/,/i, '.')
  } else {
    inputValue = input_left.value
  }
  let valueInsert = Number(inputValue)
  if (select_left.value == 'real' && valueInsert) {
    convertIt(select_right.value, valueInsert, 'R$')
  } else if (select_left.value == 'dolar' && valueInsert) {
    convertIt(select_right.value, valueInsert, 'U$')
  } else if (select_left.value == 'euro' && valueInsert) {
    convertIt(select_right.value, valueInsert, '€')
  } else if (select_left.value == 'bitcoin' && valueInsert) {
    convertIt(select_right.value, valueInsert, 'BTC')
  } else {
    fail_text.textContent = 'Favor digitar um valor válido'
  }
}

function convertIt(selectR, value, symbolL) {
  let input_right = document.querySelector('#input-right')
  if (selectR == 'real') {
    finalValue = value / valueToReal()
    finalValue = finalValue.toFixed(2)
    symbolR = 'R$'
  } else if (selectR == 'dolar') {
    finalValue = value / valueDollar
    finalValue = finalValue.toFixed(2)
    symbolR = 'U$'
  } else if (selectR == 'euro') {
    finalValue = value / valueEuro
    finalValue = finalValue.toFixed(2)
    symbolR = '€'
  } else if (selectR == 'bitcoin') {
    finalValue = value / valueBitcoin
    finalValue = finalValue.toFixed(7)
    symbolR = 'BTC'
  } else {
    fail_text.textContent =
      'Erro inesperado, não foi possível reconhecer a opção de conversão'
  }

  input_left.value = value
  input_right.value = finalValue
  document.querySelector('#symbol-left').innerHTML = symbolL
  document.querySelector('#symbol-right').innerHTML = symbolR
}

function valueToReal() {
  if (select_left.value == 'real') {
    return 1
  } else if (select_left.value == 'dolar') {
    console.log(valueRealtoDollar)
    return valueRealtoDollar
  } else if (select_left.value == 'euro') {
    console.log(valueRealtoEuro)
    return valueRealtoEuro
  } else if (select_left.value == 'bitcoin') {
    console.log(valueRealtoBitcoin)
    return valueRealtoBitcoin
  }
}

function selectAll() {
  input_left.focus()
  input_left.select()
}

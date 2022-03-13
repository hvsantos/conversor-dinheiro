const $selection = document.querySelector('.currency-select')
const $button = document.querySelector('.main-button')
const $input = document.querySelector('.inputvalor')
const $answer = document.querySelector('.answer')
$button.addEventListener('click', clickButton)
function clickButton(event) {
  event.preventDefault()
  let valueInsert = $input.value
  let option = $selection.value
  let checknumber = Number(valueInsert)
  let resultFinal = 0
  if (option == 'dolar' && valueInsert != '' && checknumber) {
    resultFinal = valueInsert * 0.2
    $answer.textContent =
      'A conversao de R$' +
      valueInsert +
      '  é equivalente à $' +
      resultFinal +
      ' USD'
  } else if (option == 'euro' && valueInsert != '' && checknumber) {
    resultFinal = valueInsert * 0.18
    $answer.textContent =
      'A conversao de R$' +
      valueInsert +
      ' é equivalente à €' +
      resultFinal +
      ' EUR'
  } else if (option == 'bitcoin' && valueInsert != '' && checknumber) {
    resultFinal = valueInsert * 0.0000049
    $answer.textContent =
      'A conversao de R$' +
      valueInsert +
      ' é equivalente à ' +
      resultFinal +
      ' BTC'
  } else {
    $answer.textContent = 'Favor digitar um valor válido'
  }
}

/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const present = new Date()

const dateFormat = value => String(value).length === 1 ? `0${value}` : `${value}`

const formatDate = date => {
  const day = dateFormat(date.getDate())
  const month = dateFormat(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
  
}

console.log(formatDate(present))


/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const weekDays = [
'Domingo', 
'Segunda-feira', 
'Terça-feira', 
'Quarta-feira', 
'Quinta-feira', 
'Sexta-feira', 
'Sábado'
]

const months = [
'Janeiro', 
'Fevereiro', 
'Março', 
'Abril', 
'Maio', 
'Junho', 
'Julho', 
'Agosto', 
'Setembro', 
'Outubro', 
'Novembro', 
'Dezembro'
]

const dateAndHour = date => {
  const hour = dateFormat(date.getHours())
  const minutes = dateFormat(date.getMinutes())
  const day = dateFormat(date.getDate())
  const getWeekDay = weekDays[date.getDay()]
  const getYearMonth = months[date.getMonth()]
  const year = date.getFullYear()

  return `${hour}:${minutes} - ${getWeekDay}, ${day} de ${getYearMonth} de ${year}`
}

console.log(dateAndHour(present))


/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id , isVerified } = user

console.log(id, isVerified)


/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA} = robotA
const { name: nameB} = robotB

console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const letters = {a, b, c}

console.log(letters)


/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange } = {}) => {
  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({target, property,willChange})
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `

const updateClock = () => {
  const present = new Date()
  const hours = dateFormat(present.getHours())
  const minutes = dateFormat(present.getMinutes())
  const seconds = dateFormat(present.getSeconds())

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)

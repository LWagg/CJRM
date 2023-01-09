/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  const isRequestOk = request.readyState === 4 && request.status === 200
  const isRequestNotOk = request.readyState === 4
  
  if (isRequestOk) {
    console.log(request.responseText)
    return 
  }

  if (isRequestNotOk) {
    console.log('Não foi possível obter os dados do pokémon')
  }
})

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
request.send()


/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

let personInfo = {
  name: 'Wagner',
  lastName: 'Leite',
  gender: 'M',
  age: 30,
  height: 1.79,
  weigth: 92,
  isWalking: false,
  metersWalked: 0
}

console.log(personInfo)

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

personInfo.increaseAge = () => personInfo.age++

for (let i = 0; i < 5; i++) {
  personInfo.increaseAge()
}

console.log(personInfo.age)


/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

personInfo.startWalking = meters => {
  personInfo.isWalking = true
  personInfo.metersWalked += meters
}

const meters = [6, 9, 10, 5]

const setMetersWalked = meter => {
  personInfo.startWalking(meter)
}

meters.forEach(setMetersWalked)

console.log(personInfo)


/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const getPluralOrSingular = (property, singular, plural) => property === 1 ? singular : plural

personInfo.attributesMessage = () => {
  const { name, lastName, gender, age, height , weigth ,metersWalked
    } = personInfo

  const verifyGender = gender === 'M' ? 'o' : 'a'
  const agePluralOrSingular = 
    getPluralOrSingular(age, 'ano', 'anos')
  const walkedMetersPluralOrSingular = 
    getPluralOrSingular(metersWalked, 'metro', 'metros')
  const heigthMetersPluralOrSingular = 
    getPluralOrSingular(height, 'metro', 'metros')

  
  return `Oi. Eu sou ${verifyGender} ${name} ${lastName}, tenho ${age} ${agePluralOrSingular}, ${height} ${heigthMetersPluralOrSingular} de altura, peso ${weigth} quilos e, só hoje, eu já caminhei ${metersWalked} ${walkedMetersPluralOrSingular}.`
}

console.log(personInfo.attributesMessage())


/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/


const falsyValues = [undefined, null, NaN, 0 , '', false]
const truthValues = ['Oi', 1, [1, 2], 'Wagner', true, '7', 'Jeh']

const isAtruthyValue = value => Boolean(value)

const isAFalsyValue = falsyValue => console.log(isAtruthyValue(falsyValue))
const isATruthValue = truthValue => console.log(isAtruthyValue(truthValue))

falsyValues.forEach(isAFalsyValue) 
truthValues.forEach(isATruthValue)



/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBook = bookName => {
  const books = {
    'Pai Rico, Pai Pobre': {
      pages: 100,
      author: 'Robert Kiyosaki',
      press: 'Alta Books'
    },
    'O Escaravelho Do Diabo': {
      pages: 115,
      author: 'Lúcia Machado de Almeida',
      press: 'Editora Ática'
    },
    'O Gigante De Botas': {
      pages: 124,
      author: 'Ofélia Fontes',
      press: 'Leuzinger'
    }
  }

  return books[bookName] || books
}

console.log(getBook())


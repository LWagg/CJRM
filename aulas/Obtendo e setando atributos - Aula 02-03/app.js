const link = document.querySelector('a')

console.log(link.getAttribute('href')) // Aqui usamos o método getAttribute para selecionar o link existente dentro da âncora (A).

link.setAttribute('href', 'https://rogermelo.com.br/') // Aqui nós setamos um novo link para a âncora através do método setAttribute, sempre passando dois parâmetros. Um com o atributo que a tag A (a = âncora) tem, que no caso é o HREF, e outro com o novo link.

link.innerText = 'Website do Roger Melo'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class')) // Aqui pegamos o nome da classe que está no html.

paragraph.setAttribute('class', 'success') // Aqui nós mudamos(setamos) o nome da class que era ERROR e colocamos SUCCESS.

paragraph.setAttribute('style', 'color:red;') // Mudamos a cor do texto do parágrafo, setando um style que ainda não existia e adicionando a cor vermelha por parâmetro.
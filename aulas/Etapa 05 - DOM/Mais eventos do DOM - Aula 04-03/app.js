const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('texto copiado') // Evento que captura uma ctrl + c que o usuário fez no parágrafo referenciado.
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY}` // Mostramos o movimento do mouse nos eixos X e Y dentro da box.
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY) // Evento 'wheel' que nos indica a posição de cada eixo em uma possível rolagem da página.
})




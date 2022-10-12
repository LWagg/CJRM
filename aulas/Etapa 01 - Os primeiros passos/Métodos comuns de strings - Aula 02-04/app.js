// métodos comuns de strings
const email = 'laracroft@rogermelo.com.br'
const lastIndexOf = email.lastIndexOf('a') // Método que pega a última vez em que aparecer a letra 'a', passada como ARGUMENTO.
console.log(lastIndexOf)

const emailSlice = email.slice(0, 9) /* Método para selecionar (cortar) uma parte da string. Passamos como argumentos o index inicial que queremos e até onde queremos. */
console.log(emailSlice)

const emailReplace = email.replace('l', 'y') /* Método para substituir algum caracter da string. Passamos dois argumentos. O primero é a string que nós queremos substitiur e o segundo é o substituto. Lembrando que só conseguimos substituir a primeira ocorrência da letra 'l', existe um jeito para trocar todos os 'l', mas é um topico mais avançado*/


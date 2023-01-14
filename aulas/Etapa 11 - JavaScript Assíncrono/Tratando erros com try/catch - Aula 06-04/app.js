try {
    console.log(oi) // Código com erro pois não temos uma let ou const 'oi' definida
} catch (error) {
    console.log(error.name, error.message)
}

console.log('oi') // Mesmo com o erro, esse código será executado.


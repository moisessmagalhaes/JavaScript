const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => { // Elemento que está marcado com a classe .tag
    const tagName = elemento.tagName.toLocaleLowerCase() // pega o nome da tag, do elemento e converte para letras minúsculas

    elemento.style.borderColor = colors.get(tagName) // Aplica uma cor a borda do elemento

    if(!elemento.classList.contains('nolabel')) { // Verifica se o elemento está marcado com no label
        const label = document.createElement('label') // Cria um elemento com o nome label
        label.style.backgroundColor = colors.get(tagName) // aplica uma cor a label
        label.innerHTML = tagName // define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes. Nota: Se um nó <div> , <span> , ou <noembed> (en-US) tem um nó filho que inclui os caracteres (&), (<), ou (>)
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})
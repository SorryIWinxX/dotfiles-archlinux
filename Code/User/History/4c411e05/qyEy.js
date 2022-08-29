const valor = document.getElementById('valor')
const engine = document.getElementById('engine')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{

    let messages = []

    if(valor.value ==='' || valor.value == null){
        messages.push('Value is required')
    }

    if (engine.length <= 4) {
        messages.push('Engine must be longer than 4 characters ')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})
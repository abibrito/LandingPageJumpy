const form = document.getElementById('form')
const userName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const cpf = document.getElementById('cpf')
const pass = document.getElementById('pass')

//Checar validção dos inputs antes de submeter
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
    
})

//Validção dos inputs
function checkInputs(){
    let error = []
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const cpfValue = cpf.value.trim()
    const passValue = pass.value.trim()

    const validar = [
        {
            validacao:() =>{
                return userNameValue === ''
            },
            acao: () =>{
                error.push({id:'username'})
                errorSpan(userName,'*Campo Obrigatório')
            },
        },
        {
            validacao:() =>{
                return userNameValue !== ''
            },
            acao: () =>{
                const aux = error.filter((value) =>{
                    return value.id !== 'username'
                })
                error = aux
                removeErrorSpan(userName);
            }
        },
        {
            validacao:() =>{
                return emailValue === ''
            },
            acao: () =>{
                error.push({id:'email'})
                errorSpan(email,'*Campo Obrigatório')
            },
        },
        {
            validacao: () =>{
                return !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(emailValue)
                
            },
            acao: ()=>{
                error.push({id:'email'})
                errorSpan(email, 'Email inválido')
            }
        },
        {
            validacao: () =>{
                return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(emailValue)
            },
            acao: () =>{
                const aux = error.filter((value) =>{
                    return value.id !== 'email'
                })
                error = aux
                removeErrorSpan(email)
            }
        },
        {
            validacao: () =>{
                return phoneValue === ''
            },
            acao: () => {
                error.push({id:'phone'})
                errorSpan(phone,'*Campo Obrigatório')
            }
        },
        {
            validacao: () =>{
                return phoneValue !== ''
            },
            acao: () => {
                const aux = error.filter((value) =>{
                    return value.id !== 'phone'
                })
                error = aux
                removeErrorSpan(phone)
            }
        },
        {
            validacao: () => {
                return cpfValue === ''
            },
            acao: () => {
                error.push({id:'cpf'})
                errorSpan(cpf, '*Campo Obrigatório')
            }
        },
        {
            validacao: () =>{
                return cpfValue !== ''
            },
            acao: () => {
                const aux = error.filter((value) =>{
                    return value.id !== 'cpf'
                })
                error = aux
                removeErrorSpan(cpf)
            }
        },
        {
            validacao: () => {
                return passValue === ''
            },
            acao: () => {
                error.push({id:'password'})
                errorSpan(pass, '*Campo Obrigatório')
            }
        },
        {
            validacao: () =>{
                return passValue !== ''
            },
            acao: () => {
                const aux = error.filter((value) =>{
                    return value.id !== 'password'
                })
                error = aux
                removeErrorSpan(pass)
            }
        },
    ]

    validar.forEach((item) =>{
        if(item.validacao()){
            item.acao()
        }
    })
    if(error.length === 0){
        const span = document.getElementById('sucessoSpan')
        span.className = 'sucessoSpan'

        const erroSpan = document.getElementById('errorSpan')
        erroSpan.className = 'remove-elemento'
    }
    else{
        const span = document.getElementById('errorSpan')
        span.className = 'errorSpan'

        const sucessoSpan = document.getElementById('sucessoSpan')
        sucessoSpan.className = 'remove-elemento'
    }
}

//função de erro
function errorSpan(input, message ){
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')

    span.innerText = message

    formControl.className = 'form-control error'
}

function successSpan(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control'
}

function removeErrorSpan(input){
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')

    span.innerText = ''

    formControl.className = 'form-control'
}
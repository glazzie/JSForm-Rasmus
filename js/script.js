let users = [{
    id: '1',
    firstName: 'Rasmus',
    lastName: 'Andersson',
    email: 'Rasse.andersson@live.se'
},
{
    id: '2',
    firstName: 'nagonting',
    lastName: 'jaawdaw',
    email: 'awdwadwada@live.se'
},
{
    id: '3',
    firstName: 'dawawawdadw',
    lastName: 'dawdwaawdwa',
    email: 'awdadwawawdawdawdawd@live.se'
}]

const form = document.querySelector('#form')
const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const emailInput = document.querySelector('#email')
const addBtn = document.querySelector('#addButton')
const output = document.querySelector('#output')
const firstNameError = document.querySelector('#firstNameError')
const lastNameError = document.querySelector('#lastNameError')
const emailError = document.querySelector('#emailError')

let checkfname = false;
let checklname = false;
let checkemail = false;



const userList = () => {
    output.innerHTML = ''
    users.forEach(user => {
        output.innerHTML += `<div id="${user.id}" class="mt-3 border-bottom"><div class="d-flex"><div class="firstName fs-4">${user.firstName}</div><div class="lastName ms-2 fs-4">${user.lastName}</div></div><div class="userEmail align-self-start text-primary">${user.email}</div></div>`
    })
}

addBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    if(firstNameInput.value === '' || firstNameInput.value == null){
        checkfname = false
        firstNameError.innerText = "Firstname is required"
        firstNameInput.classList.add('is-invalid')

    } else{
        checkfname = true 
    }

    if(lastNameInput.value === '' || lastNameInput.value == null){
        checklname = false
        lastNameError.innerText = "Lastname is required"
        lastNameInput.classList.add('is-invalid')
    } else{
        checklname = true 
    }

    //fungerar inte
    if(emailInput.value === '' || emailInput.value == null){
        checkemail = false
        emailError.innerText = "Email is required"
        emailInput.classList.add('is-invalid')
    } 
     //fungerar inte
    else if(emailInput.value.includes('å' || 'ä' || 'ö')) {
        emailError.innerText = "Email contains invalid characters"
        emailInput.classList.add('is-invalid')
    } else{
        checkemail = true 
    }

    if(checkfname && checklname && checkemail){
        let user = {
            id: Date.now().toString(),
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value
        }

        firstNameInput.classList.remove('is-invalid')
        lastNameInput.classList.remove('is-invalid')
        emailInput.classList.remove('is-invalid')
        firstNameError.innerText = ''
        lastNameError.innerText = ''
        emailError.innerText = ''
        users.push(user)
        userList()
    }

})




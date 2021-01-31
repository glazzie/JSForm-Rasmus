let users = [
]

const form = document.querySelector('#form')
const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const emailInput = document.querySelector('#email')
const addBtn = document.querySelector('#addButton')
const output = document.querySelector('#output')
const firstNameError = document.querySelector('#firstNameError')
const lastNameError = document.querySelector('#lastNameError')
const emailError = document.querySelector('#emailError')
const delButton = document.querySelector('.delButton')
const editButton = document.querySelector('.editButton')

let checkfname = false;
let checklname = false;
let checkemail = false;
let selectedUser = {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
};

const userList = () => {
    output.innerHTML = ''
    users.forEach(user => {
        output.innerHTML += `<div id="${user.id}" class="mt-3 border-bottom d-flex justify-content-between"><div><div class="d-flex"><div class="firstName fs-4">${user.firstName}</div><div class="lastName ms-2 fs-4">${user.lastName}</div></div><div class="userEmail align-self-start text-primary">${user.email}</div></div> <div>
        <button onclick="Delete(this)" class="btn btn-danger delButton my-auto">X</button>
        <button onclick="Edit(this)"class="btn btn-primary editButton my-auto "><i class="far fa-edit"></i></button>
    </div></div>`
    })

}

userList()

const isUsed = () => {
    for (let i = 0; i < users.length; i++){
    if(users[i].email.toLowerCase().indexOf(emailInput.value.toLowerCase()) === -1){
       
    }else {
        return true
    }
    
    }
}


addBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    if(firstNameInput.value === '' || firstNameInput.value.length < 2){
        checkfname = false
        firstNameError.innerText = "Firstname is to short"
        firstNameInput.classList.add('is-invalid')

    } else{
        checkfname = true 
    }

    if(lastNameInput.value === '' || lastNameInput.value.length < 2){
        checklname = false
        lastNameError.innerText = "Lastname is to short"
        lastNameInput.classList.add('is-invalid')
    } else{
        checklname = true 
    }

    if(emailInput.value === ''){
        checkemail = false
        emailError.innerText = "Email is required"
        emailInput.classList.add('is-invalid')
    } 
    
    else if(!isEmail(emailInput.value)) {
        emailError.innerText = "Email is invalid"
        emailInput.classList.add('is-invalid')
        checkemail = false

    } 
    else if(isUsed()){
        emailError.innerText = "Email is already in use"
        emailInput.classList.add('is-invalid')
        checkemail = false
    }
    else{
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
        checkfname = false;
        checklname = false;
        checkemail = false;
        firstNameInput.value = ""
        lastNameInput.value = ""
        emailInput.value = ""
    }

})

function isEmail(emailInput) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
}

/*output.addEventListener('click', (e) => {

    users = users.filter(user => user.id !== e.target.parentNode.id)
    userList()
})

output.addEventListener('click', (e) => {

    console.log(e.target)
    userList()
})

*/




editBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    
    for (let i = 0; i < users.length; i++){
        if(users[i].id == selectedUser.id){
            
            if(firstNameInput.value === '' || firstNameInput.value.length < 2){
                checkfname = false
                firstNameError.innerText = "Firstname is to short"
                firstNameInput.classList.add('is-invalid')
        
            } else{
                checkfname = true 
            }
        
            if(lastNameInput.value === '' || lastNameInput.value.length < 2){
                checklname = false
                lastNameError.innerText = "Lastname is to short"
                lastNameInput.classList.add('is-invalid')
            } else{
                checklname = true 
            }
        
        
            if(emailInput.value === ''){
                checkemail = false
                emailError.innerText = "Email is required"
                emailInput.classList.add('is-invalid')
            } 
            
            else if(!isEmail(emailInput.value)) {
                emailError.innerText = "Email is invalid"
                emailInput.classList.add('is-invalid')
                checkemail = false
        
            } 
            else if(isUsed() && users[i].email !== emailInput.value){
                emailError.innerText = "Email is already in use"
                emailInput.classList.add('is-invalid')
                checkemail = false
            }
            else{
                    checkemail = true 
                }
                
        
            if(checkfname && checklname && checkemail){
                    users[i].firstName = firstNameInput.value
                    users[i].lastName = lastNameInput.value
                    users[i].email = emailInput.value
                    selectedUser.email = ''
                    firstNameInput.value = ""
                    lastNameInput.value = ""
                    emailInput.value = ""
                    selectedUser.firstName = ''
                    selectedUser.lastName = ''
                    selectedUser.id = ''
                    firstNameError.innerText = ''
                    lastNameError.innerText = ''
                    emailError.innerText = ''
                    firstNameInput.classList.remove('is-invalid')
                    lastNameInput.classList.remove('is-invalid')
                    emailInput.classList.remove('is-invalid')
                }

        }
        
    }
        userList()
})

function Delete(currentEl){

    users = users.filter(user => user.id !== currentEl.parentNode.parentNode.id)
    userList()
    
}

function Edit(currentEl){

    emailInput.value = currentEl.parentNode.parentNode.firstChild.lastChild.innerText
    firstNameInput.value = currentEl.parentNode.parentNode.firstChild.firstChild.firstChild.innerText
    lastNameInput.value = currentEl.parentNode.parentNode.firstChild.firstChild.lastChild.innerText
    selectedUser.id = currentEl.parentNode.parentNode.id
    selectedUser.firstName = currentEl.parentNode.parentNode.firstChild.firstChild.firstChild.innerText
    selectedUser.lastName = currentEl.parentNode.parentNode.firstChild.firstChild.lastChild.innerText
    selectedUser.email = currentEl.parentNode.parentNode.firstChild.lastChild.innerText
    userList()
    
}


const form = document.querySelector('.form')
const email = document.getElementById('emailInput')
const warningElement = document.getElementById('warningContainer')

const validateForm = () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (isValid.test(email.value)) {
  	warningElement.innerHTML = ''
  	email.classList.remove('invalid')
  } else {
  	warningElement.innerHTML = '<p class="errorMsg">Please provide a valid email</p>'
  	email.classList.add('invalid')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateForm()
})

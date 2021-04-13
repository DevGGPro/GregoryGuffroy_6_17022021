import { createForm } from './factoryElements'
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const modal = document.getElementById('modal-form')
const wrapper = document.getElementsByClassName('wrapper')

const form = document.getElementsByClassName('form')

const openForm = document.getElementsByClassName('photographerProfils__contact')
const closeForm = document.getElementsByClassName('form__close')

let firstnameIsValide = false
let lastnameIsValide = false
let emailIsValide = false
let messageIsValide = false

function formulaire () {
  openForm[0].addEventListener('click', function (e) {
    launchModal()
    createForm(e.target.previousSibling.alt)
    focusFirstInput()

    const inputFirstname = document.getElementById('firstname')
    const inputLastname = document.getElementById('lastname')
    const inputEmail = document.getElementById('email')
    const inputMessage = document.getElementById('message')

    form[0].addEventListener('submit', function (e) {
      if (!firstnameIsValide || !lastnameIsValide || !emailIsValide || !messageIsValide) {
        e.preventDefault()
        formInputErreur(inputFirstname)
        formInputErreur(inputLastname)
        formInputErreur(inputEmail)
        formInputErreur(inputMessage)
      } else {
        console.log('Prenom => ' + inputFirstname.value)
        console.log('Nom => ' + inputLastname.value)
        console.log('Email => ' + inputEmail.value)
        console.log('Message => ' + inputMessage.value)
        closeModal()
      }
    })
    inputFirstname.addEventListener('input', (e) => {
      formInputErreur(inputFirstname)
    })
    inputLastname.addEventListener('input', (e) => {
      formInputErreur(inputLastname)
    })
    inputEmail.addEventListener('input', (e) => {
      formInputErreur(inputEmail)
    })
    inputMessage.addEventListener('input', (e) => {
      formInputErreur(inputMessage)
    })
    closeForm[0].addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        focusFirstInput()
      }
    })
    closeForm[0].addEventListener('click', e => {
      closeModal()
    })
    window.addEventListener('keydown', k => {
      if (k.key === 'Escape') {
        closeModal()
      }
    })
  })
}

/**
 * Function to focus a specific HTML DOM Element
 */
function focusFirstInput () {
  const inputFirstname = document.getElementById('firstname')
  inputFirstname.focus()
}

/**
 * Function to launch the modal
 */
function launchModal () {
  modal.style.display = 'block'
  modal.setAttribute('aria-hidden', 'false')
  wrapper[0].setAttribute('aria-hidden', 'true')
}

/**
 * Function to close the modal
 */
function closeModal () {
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  wrapper[0].setAttribute('aria-hidden', 'false')
  cleanform()
}

/**
 * Function to clear the lightbox
 */
function cleanform () {
  const modal = document.getElementById('modal-form')
  modal.innerHTML = ''
}

/**
 * Check if there is an error in the input HTML DOM Element
 * @param {HTMLElement} dom HTML DOM Element
 */
function formInputErreur (dom) {
  if (dom.parentElement.lastChild.className === 'form__erreur') {
    dom.parentElement.removeChild(dom.parentElement.lastChild)
  }
  if (dom.id === 'firstname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', true)
      firstnameIsValide = false
      dom.setAttribute('aria-invalid', 'true')
    } else {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', false)
      firstnameIsValide = true
      dom.setAttribute('aria-invalid', 'false')
    }
  }
  if (dom.id === 'lastname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', true)
      lastnameIsValide = false
      dom.setAttribute('aria-invalid', 'true')
    } else {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', false)
      lastnameIsValide = true
      dom.setAttribute('aria-invalid', 'false')
    }
  }
  if (dom.id === 'email') {
    if (!emailRegEx.test(dom.value.trim())) {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', true)
      emailIsValide = false
      dom.setAttribute('aria-invalid', 'true')
    } else {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', false)
      emailIsValide = true
      dom.setAttribute('aria-invalid', 'false')
    }
  }
  if (dom.id === 'message') {
    if (dom.value.trim().length === 0) {
      isErreur(dom, 'Le message ne doit pas être vide', true)
      messageIsValide = false
      dom.setAttribute('aria-invalid', 'true')
    } else {
      isErreur(dom, 'Le message ne doit pas être vide', false)
      messageIsValide = true
      dom.setAttribute('aria-invalid', 'false')
    }
  }
}

/**
 * Modify style and add an error message
 * @param {HTMLElement} dom HTML DOM Element
 * @param {string} message Error message
 * @param {boolean} boolean false or true if there is an error
 */
function isErreur (dom, message, boolean) {
  if (boolean) {
    dom.style.border = 'solid 2px red'
    dom.style.color = 'red'

    const spanErreur = document.createElement('span')
    spanErreur.classList.add('form__erreur')
    spanErreur.innerHTML = message
    dom.parentElement.appendChild(spanErreur)
  } else {
    dom.style.border = 'none'
    dom.style.color = 'black'
  }
}

export { formulaire }

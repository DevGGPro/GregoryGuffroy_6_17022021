import { createForm } from './factoryElements'
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const modal = document.getElementById('modal-form')

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
    createForm(e.target.previousElementSibling.innerText)

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

    closeForm[0].addEventListener('click', closeModal)
  })
}

function launchModal () {
  modal.style.display = 'block'
}

function closeModal () {
  modal.style.display = 'none'
  cleanform()
}

function cleanform () {
  const modal = document.getElementById('modal-form')
  modal.innerHTML = ''
}

function formInputErreur (dom) {
  if (dom.parentElement.lastChild.className === 'form__erreur') {
    dom.parentElement.removeChild(dom.parentElement.lastChild)
  }
  if (dom.id === 'firstname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', true)
      firstnameIsValide = false
    } else {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', false)
      firstnameIsValide = true
    }
  }
  if (dom.id === 'lastname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', true)
      lastnameIsValide = false
    } else {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', false)
      lastnameIsValide = true
    }
  }
  if (dom.id === 'email') {
    if (!emailRegEx.test(dom.value.trim())) {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', true)
      emailIsValide = false
    } else {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', false)
      emailIsValide = true
    }
  }
  if (dom.id === 'message') {
    if (dom.value.trim().length === 0) {
      isErreur(dom, 'Le message ne doit pas être vide', true)
      messageIsValide = false
    } else {
      isErreur(dom, 'Le message ne doit pas être vide', false)
      messageIsValide = true
    }
  }
}

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

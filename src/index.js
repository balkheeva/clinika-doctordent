import Carousel from 'tnt-carousel'
import initPhoneMask from './helpers/initPhoneMask'
import initDraggable from './helpers/initDraggable'
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.phone-js').forEach(el => initPhoneMask(el))
    initDraggable({
        elementsQuery: '.draggable-js',
        dragTargetClassName: 'draggable-target-js'
    })

    new Carousel(document.querySelector('.carousel'), {
        autoplay: false
    });

    const inputEl = document.querySelector('.form-offer .field-input__input')
    const btn = document.querySelector('.form-offer .btn')
    const phoneEl = document.querySelector('input[type="tel"]')

    inputEl.addEventListener("focus", () => {
        inputEl.classList.remove('valid', 'invalid')
        findParent(inputEl).querySelector('.error').textContent = "";
    })

    phoneEl.addEventListener("focus", () => {
        phoneEl.classList.remove('valid', 'invalid')
        findParent(phoneEl).querySelector('.error').textContent = "";
    })

    inputEl.addEventListener("blur", () => {
        if (!inputEl.value.trim()) {
            inputEl.classList.remove('valid')
            inputEl.classList.remove('invalid')
            findParent(inputEl).querySelector('.error').textContent = "";
        } else {
            inputEl.classList.add('valid')
        }
    })

    phoneEl.addEventListener("blur", () => {
        if (!phoneEl.value.trim()) {
            phoneEl.classList.remove('valid')
            phoneEl.classList.remove('invalid')
            findParent(phoneEl).querySelector('.error').textContent = "";
        } else {
            phoneEl.classList.add('valid')
        }
    })

    btn.addEventListener("click", () => {
        let errorMessage

        if (!inputEl.value.trim()) errorMessage = 'Это поле должно быть заполнено'
        else if (!isNameValid(inputEl.value)) errorMessage = 'Укажите корректное имя'

        if (errorMessage) {
            inputEl.classList.add('invalid')
            inputEl.classList.remove('valid')
            findParent(inputEl).querySelector('.error').textContent = errorMessage;
        } else {
            inputEl.classList.remove('invalid')
            inputEl.classList.add('valid')
            findParent(inputEl).querySelector('.error').textContent = "";
        }

        if (!phoneEl.value.trim() || !isPhoneValid(phoneEl)) {
            phoneEl.classList.add('invalid')
            phoneEl.classList.remove('valid')
            findParent(phoneEl).querySelector('.error').textContent = "Это поле должно быть заполнено";

        } else {
            phoneEl.classList.remove('invalid')
            phoneEl.classList.add('valid')
            findParent(phoneEl).querySelector('.error').textContent = "";
        }
    })

    function findParent(element) {
        return element.closest('.field-input');
    }
    function isPhoneValid(element) {
       return /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/.test(element.value)
    }
    function isNameValid(value) {
        return /^([А-ЯЁ-]*)?((\s[А-ЯЁ-]*)?\s[А-ЯЁ]*)?$/i.test(value)
    }

})


export default function initValidation(options) {

    const inputEl = document.querySelector(options.nameElementsQuery)
    const phoneEl = document.querySelector(options.phoneElementsQuery)
    const btn = document.querySelector(options.buttonElementsQuery)
    const parent = options.parentElementsQuery

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
        let errorMessageName
        let errorMessagePhone

        if (!inputEl.value.trim()) errorMessageName = 'Это поле должно быть заполнено'
        else if (!isNameValid(inputEl.value)) errorMessageName = 'Укажите корректное имя'

        if (!phoneEl.value.trim()) errorMessagePhone = 'Это поле должно быть заполнено'
        else if (!isPhoneValid(phoneEl.value)) errorMessagePhone = 'Укажите корректный телефон'

        if (errorMessageName) {
            inputEl.classList.add('invalid')
            inputEl.classList.remove('valid')
            findParent(inputEl).querySelector('.error').textContent = errorMessageName;
        } else {
            inputEl.classList.remove('invalid')
            inputEl.classList.add('valid')
            findParent(inputEl).querySelector('.error').textContent = "";
        }

        if (errorMessagePhone) {
            phoneEl.classList.add('invalid')
            phoneEl.classList.remove('valid')
            findParent(phoneEl).querySelector('.error').textContent = errorMessagePhone;

        } else {
            phoneEl.classList.remove('invalid')
            phoneEl.classList.add('valid')
            findParent(phoneEl).querySelector('.error').textContent = "";
        }
    })

    function findParent(element) {
        return element.closest(parent);
    }

    function isPhoneValid(element) {
        return /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/.test(element)
    }

    function isNameValid(value) {
        return /^([А-ЯЁ-]*)?((\s[А-ЯЁ-]*)?\s[А-ЯЁ]*)?$/i.test(value)
    }
}
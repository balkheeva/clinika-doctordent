import PhoneMask from "@zoibana/phonemask";

const PHONE_MASK = '+7 (___) ___-__-__'

export default function initPhoneMask(el) {
    const phoneMaskEnd = el.querySelector('.field-input__mask-end');
    const phoneMaskStart = el.querySelector('.field-input__mask-start');
    const phoneEl = el.querySelector('input');

    new PhoneMask(phoneEl);

    phoneEl.addEventListener('focus', () => {
        if (!phoneEl.value) phoneEl.value = '+7 ('
        requestAnimationFrame(() => {
            phoneEl.setSelectionRange(phoneEl.value.length, phoneEl.value.length);
        });
    })

    phoneEl.addEventListener('blur', () => {
        if (phoneEl.value === '+7 (') phoneEl.value = '';
    });

    phoneEl.addEventListener('input', () => {
        phoneMaskEnd.innerText = PHONE_MASK.substring(phoneEl.value.length, PHONE_MASK.length);
        phoneMaskStart.innerText = phoneEl.value;
        // TODO: add prevention to remove the first symbols of the phone mask
    });
}

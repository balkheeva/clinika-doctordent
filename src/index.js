import './style.scss'
import PhoneMask from '@zoibana/phonemask'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.min.js'

console.log("Hello World!");
new PhoneMask('#phone');

const phoneEl = document.querySelector('#phone');
phoneEl.addEventListener('focus', () => {
    if (!phoneEl.value) phoneEl.value = '+7 ('
    requestAnimationFrame(() => {
        phoneEl.setSelectionRange(phoneEl.value.length, phoneEl.value.length)
    })
})
phoneEl.addEventListener('blur', () => {
    if (phoneEl.value === '+7 (') {
        phoneEl.value = ''
    }
})

const PHONE_MASK = '+7 (___) ___-__-__'

const phoneMaskEnd = document.querySelector('.field-input__mask-end');
const phoneMaskStart = document.querySelector('.field-input__mask-start');

phoneEl.addEventListener('input', () => {
    phoneMaskEnd.innerText = PHONE_MASK.substring(phoneEl.value.length, PHONE_MASK.length)
    phoneMaskStart.innerText = phoneEl.value
});

$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});






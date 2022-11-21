import Carousel from 'tnt-carousel'
import initPhoneMask from './helpers/initPhoneMask'
import initDraggable from './helpers/initDraggable'
import './style.scss';
import initValidation from "./helpers/initValidation";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.phone-js').forEach(el => initPhoneMask(el))
    initDraggable({
        elementsQuery: '.draggable-js',
        dragTargetClassName: 'draggable-target-js'
    })

    new Carousel(document.querySelector('.carousel'), {
        autoplay: false
    });

    initValidation({
        nameElementsQuery: '.nameValidation-js',
        phoneElementsQuery: '.phoneValidation-js',
        parentElementsQuery: '.parent-js',
        buttonElementsQuery: '.button-js'
    })

})


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


})


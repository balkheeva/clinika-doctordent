export default function initDraggable(options) {

    let currentEl = null
    let offsets = null
    let parent

    document.querySelectorAll(options.elementsQuery).forEach(el => {
        el.addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains(options.dragTargetClassName)) return
            const origEl = el.children[0]
            parent = el
            const rect = origEl.getBoundingClientRect()
            currentEl = document.createElement('div')
            offsets = {
                offsetX: e.pageX - (window.scrollX + rect.left),
                offsetY: e.pageY - (window.scrollY + rect.top)
            }
            currentEl.classList.add('draggable-pseudo-js')
            currentEl.appendChild(origEl.cloneNode(true))
            currentEl.style.width = rect.width + 'px'
            currentEl.style.height = rect.height + 'px'
            document.body.style.cursor = "grabbing"
            setCoords(currentEl, e.pageX - offsets.offsetX, e.pageY - offsets.offsetY)
            document.body.appendChild(currentEl)
        })

        el.addEventListener('mouseenter', e => {
            if (!currentEl || parent === e.target) return
            const el1 = e.target.children[0]
            const el2 = parent.children[0]
            e.target.innerHTML = ''
            e.target.appendChild(el2)
            parent.innerHTML = ''
            parent.appendChild(el1)
            parent = e.target
        })
    })

    document.addEventListener('mouseup', (e) => {
        if (currentEl) currentEl.remove()
        currentEl = null
        offsets = null
        document.body.style.cursor = ""
    })

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            if (!currentEl || !offsets) return
            setCoords(currentEl, e.pageX - offsets.offsetX, e.pageY - offsets.offsetY)

        })
    })

    function setCoords(el, x, y) {
        el.style.transform = `translate(${x}px, ${y}px)`
    }
}
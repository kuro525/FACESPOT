const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')

document
    .querySelector('.start-button')
    .addEventListener('click', () => {
        line1.classList.add('width-line')
        line2.classList.add('height-line')
    })

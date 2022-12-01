const nextArrow = document.getElementById('nextArrow')
const backArrow = document.getElementById('backArrow')
const image = document.getElementById('image')
const img1 = './images/fusca.jpeg'
const img2 = './images/mustang.jpeg'
const img3 = './images/porshe.jpeg'

const images = [img1, img2, img3]
let currentImage = 0

function next() {
    currentImage++

    if(currentImage === images.length){
          currentImage = 0
    }

    image.src = images[currentImage]

}

function back(){
    currentImage--

    if(currentImage < 0){
        currentImage = 2
    }

    image.src = images[currentImage]
}

nextArrow.addEventListener('click', next)
backArrow.addEventListener('click', back)
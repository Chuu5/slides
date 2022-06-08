const slideRight = document.querySelector(".right-side")
const slideLeft = document.querySelector(".left-side")
const container = document.querySelector(".container")
const upButton = document.querySelector(".up")
const downButton = document.querySelector(".down")
const slidesLength = slideRight.querySelectorAll("div").length
let count = 0
let countDown = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

function goUp() {
    const height = container.clientHeight
    console.log(height * count)
    count += 1
    console.log(count)
    
    slideLeft.style.transform = `translateY(${count * height}px)`
    slideRight.style.transform = `translateY(-${count * height}px)`
    if (count > slidesLength - 1) {
        slideLeft.style.transform = `translateY(0px)`
        slideRight.style.transform = `translateY(0px)`
        count = 0
    }
}

function goDown() {
    const height = container.clientHeight
    console.log(count)
    count -= 1
    
    if (count * height < 0) {
        count = slidesLength - 1
    }
    slideLeft.style.transform = `translateY(${count * height}px)`
    slideRight.style.transform = `translateY(-${count * height}px)`
    
}

upButton.addEventListener("click", goUp)
downButton.addEventListener("click", goDown)
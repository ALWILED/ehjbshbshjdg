const divContainer = document.querySelector('#divContainer')

let numberDivs = 16;
let width = 80/numberDivs;
let height = 80/numberDivs;

let color;

buttonReset = document.querySelector('#reset')

buttonReset.addEventListener("click", () => {
    updateContainer(numberDivs);
})

function updateContainer(numberDivs) {
    if (divContainer.children.length > 0) {
        let boxestemp = document.querySelector('.item')
        divContainer.remove(boxestemp)
    }

    for (i = 0; i < numberDivs * numberDivs; i++) {
        const boxes = document.createElement('div')
        boxes.classList.add('item')
        boxes.style.width = `${height}vh`
        boxes.style.height = `${height}vh`
        boxes.addEventListener("mouseover", () => {
            boxes.style.backgroundColor = 'black'
        })

        divContainer.appendChild(boxes)
    }

}

//function effectHover() {}

//oxes.addEventListener('ondragstart', effectHover)

updateContainer(numberDivs);


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
let cont = document.body.children[0];
cont.style.backgroundColor = getRandomColor();

let boxes = document.body.children[0].children;
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
    e.style.borderColor = getRandomColor();
})
const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
    const randomColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    document.body.style.backgroundColor = randomColor;
});

function randomValue() {
    return Math.floor(Math.random() * 256); // 0 to 255
}
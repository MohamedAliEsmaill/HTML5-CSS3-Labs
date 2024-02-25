const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const colorPreview = document.querySelector('.color-preview');
const colorTest = document.querySelector('.color-test');

function updateColorPreview() 
{
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;
    const rgb = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorPreview.style.backgroundColor = rgb;
    redValue.textContent = redValue;
    greenValue.textContent = greenValue;
    blueValue.textContent = blueValue;
    colorTest.style.color = rgb;
}

red.addEventListener('input', updateColorPreview);
green.addEventListener('input', updateColorPreview);
blue.addEventListener('input', updateColorPreview);

updateColorPreview();
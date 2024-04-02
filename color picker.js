let bgColorContainer, colorText;
bgColorContainer = document.getElementById("colorPickerContainer");
colorText = document.getElementById("selectedColorHexCode");

function buttonFirst() {
    bgColorContainer.style.backgroundColor = "#e0e0e0";
    colorText.textContent = "#e0e0e0";
}

function buttonSecond() {
    bgColorContainer.style.backgroundColor = "#6fcf97";
    colorText.textContent = "#6fcf97";
}

function buttonThird() {
    bgColorContainer.style.backgroundColor = "#56ccf2";
    colorText.textContent = "#56ccf2";
}

function buttonFourth() {
    bgColorContainer.style.backgroundColor = "#bb6bd9";
    colorText.textContent = "#bb6bd9";
}
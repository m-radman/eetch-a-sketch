
function makeGrid(x, y) {
    for (let i = 0; i < x; i++) {
        const lineDiv = document.createElement("div");
        lineDiv.style = "display:flex; flex-flow:row nowrap; flex:auto";

        for (let j = 0; j < y; j++) {
            const div = document.createElement("div");
            div.style = "border:1px solid lightgrey; flex:1";
            div.classList.add("pixel");

            lineDiv.appendChild(div);
        };

        document.getElementById("container").appendChild(lineDiv);
    };
};

let color;
document.getElementById("colorpicker").addEventListener("change", () => {
    color = document.getElementById("colorpicker").value;
});
document.getElementById("black").addEventListener("click", () => color = "black");

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const pixels = document.getElementsByClassName("pixel");

document.getElementById("confirm-button").addEventListener("click", () => {
    const dimensionX = document.getElementById("grid-size").value;
    if (dimensionX > 100) {
        alert("Value must be less then or equal to 100.");
        dimensionX = 100;
    }
    const dimensionY = dimensionX;

    makeGrid(dimensionX, dimensionY);

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", () => {
            pixels[i].style.backgroundColor = color;
        });
    };
});

document.getElementById("clear-grid").addEventListener("click", () => {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "beige";
    };
});

function deleteGrid() {
    const theDiv = document.getElementById("container");
    while (theDiv.hasChildNodes()) {
        theDiv.removeChild(theDiv.firstChild);
    };
};
document.getElementById("delete-grid").addEventListener("click", () => deleteGrid());
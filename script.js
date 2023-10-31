let button1Options = document.createElement("div");
button1Options.classList.add("button-options");
button1Options.innerHTML = `
    <button>Opção 1.1</button>
    <button>Opção 1.2</button>
    <button>Opção 1.3</button>
    <button>Opção 1.4</button>
    <button>Opção 1.5</button>
`;

let button2Options = document.createElement("div");
button2Options.classList.add("button-options");
button2Options.innerHTML = `
    <button>Opção 2.1</button>
    <button>Opção 2.2</button>
    <button>Opção 2.3</button>
    <button>Opção 2.4</button>
    <button>Opção 2.5</button>
`;

let button3Options = document.createElement("div");
button3Options.classList.add("button-options");
button3Options.innerHTML = `
    <button>Opção 3.1</button>
    <button>Opção 3.2</button>
    <button>Opção 3.3</button>
    <button>Opção 3.4</button>
    <button>Opção 3.5</button>
`;

let button4Options = document.createElement("div");
button4Options.classList.add("button-options");
button4Options.innerHTML = `
    <button>Opção 4.1</button>
    <button>Opção 4.2</button>
    <button>Opção 4.3</button>
    <button>Opção 4.4</button>
    <button>Opção 4.5</button>
`;

let button5Options = document.createElement("div");
button5Options.classList.add("button-options");
button5Options.innerHTML = `
    <button>Opção 5.1</button>
    <button>Opção 5.2</button>
    <button>Opção 5.3</button>
    <button>Opção 5.4</button>
    <button>Opção 5.5</button>
`;

document.getElementById("button1").appendChild(button1Options);
document.getElementById("button2").appendChild(button2Options);
document.getElementById("button3").appendChild(button3Options);
document.getElementById("button4").appendChild(button4Options);
document.getElementById("button5").appendChild(button5Options);
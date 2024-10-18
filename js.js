let text = '';
let hobbies = [{
    name: 'Fotball',
    image: "juve.png",
},
{
    name: 'Politikk',
    image: "politikk.jpeg",
},
{
    name: 'Teknologi',
    image: "teknologi.jpeg",
},
{
    name: 'Historie',
    image: "historie.jpeg",
},
];



function updateView() {
    let html = '';
    html = /*HTML*/`
    <h1>Infoside Nicolai</h1>
    <div class="hobbyer">
    <h2>Hobbyer</h2>
    <div>${createHobbies()}</div>
    </div>
    <div class="bio">
    <div>${showBio()}</div>
    </div>
    <button onclick="changeColor()">Change Color</button>
`
    document.getElementById('app').innerHTML = html;
}

function createHobbies() {
    let createHobbiesHtml = '';
    for (let i = 0; i < hobbies.length; i++) {
        createHobbiesHtml += /*HTML*/ `

                <img src="${hobbies[i].image}">
                ${hobbies[i].name}
`;
    }
    return createHobbiesHtml;
}


function showBio() {
    let html = '';
    html += /*HTML*/ `
    Hei, mitt navn er Nicolai, jeg er 31 år gammel og er student på GetAcademy.<br>
    Jeg er ikke spesielt glad i CSS.`
    return html;
}

function changeColor() {
    let colors = ['green', 'blue', 'yellow', 'orange', 'pink', 'white', 'purple'];
    let randNum = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randNum];
    updateView();
};
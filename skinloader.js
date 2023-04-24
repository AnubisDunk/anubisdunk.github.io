let content = document.querySelector("#content");

let skins = {
    name: "MP5 Playground",
    img: "https://steamuserimages-a.akamaihd.net/ugc/2028351156741267123/3C460F21A163BDF9EB77228967B7A88ADC0C4687/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
};

for (let i = 0; i < 20; i++) {
    content.appendChild(loadSkins());

}

async function getGitData() {
    const res = await fetch('https://api.github.com/users/anubisdunk');
    const data = await res.json();
    console.log(data);
    return data;
}
getGitData();
function loadSkins() {
    card = `
    <img src="${skins.img}">
    <p>${skins.name}</p>
    `;
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = card;
    return div;
}
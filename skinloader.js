let content = document.querySelector("#content");
getSkinData();

async function getSkinData() {
    const res = await fetch('http://localhost:8080/skins');
    const data = await res.json();
    for(const skin of data) {
        content.appendChild(await loadSkins(skin));
    }

}

async function loadSkins(skins) {
    card = `
    <img src="${skins.image}">
    <p>${skins.name}</p>
    `;
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = card;
    return div;
}

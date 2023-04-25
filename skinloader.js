
let rustContent = document.querySelector("#rust");
let csgoContent = document.querySelector("#csgo");
let untContent = document.querySelector("#unturned");
getSkinData();

async function getSkinData() {
    try {
        rustContent.textContent = "Loading data";
        const res = await fetch('https://anubisdunk-serverloader.onrender.com/skins');
        // const res = await fetch('http://localhost:8080/skins'); //dev
        const data = await res.json();
        rustContent.textContent = "";
        for (const skins of data) {
            for (const skin of skins.rust)
                rustContent.appendChild(await loadSkins(skin));
            for (const skin of skins.csgo)
                csgoContent.appendChild(await loadSkins(skin));
            for (const skin of skins.unturned)
                untContent.appendChild(await loadSkins(skin));
        }
    } catch (e) {
    console.log("404")
}


}

async function loadSkins(skins) {
    card = `
    <img src="${skins.image}">
    <p>${skins.name}</p>
    `;
    let div = document.createElement('div');
    div.classList.add('card');
    div.addEventListener('click', ()=>{
        location.href = `${skins.link}`
    })
    div.innerHTML = card;
    return div;
}



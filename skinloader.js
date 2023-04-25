

// db.collection("skins").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
//main
let rustContent = document.querySelector("#rust");
getSkinData();

async function getSkinData() {
    try {
        rustContent.textContent = "Loading data";
        const res = await fetch('https://anubisdunk-serverloader.onrender.com/skins');
        const data = await res.json();
        rustContent.textContent = "";
        for (const skin of data) {
            rustContent.appendChild(await loadSkins(skin));
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
    div.innerHTML = card;
    return div;
}



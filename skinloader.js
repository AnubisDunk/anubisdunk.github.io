

// db.collection("skins").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
//main
let content = document.querySelector("#content");
getSkinData();

async function getSkinData() {
    try {
        const res = await fetch('https://anubisdunk-serverloader.onrender.com/skins');
        const data = await res.json();
        for (const skin of data) {
            content.appendChild(await loadSkins(skin));
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



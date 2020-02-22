// const dinos = [
//     {
//         id: "dino1",
//         name: 'Rex',
//         type: 'T Rex',
//         age: 100,
//         owner: 'Zoe',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61vkPO-v8fL._AC_SL1200_.jpg'
//     },
//     {
//         id: "dino2",
//         name: 'Bob',
//         type: 'Brontosaurus',
//         age: 150,
//         owner: 'Zoe',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://www.factsjustforkids.com/images/brontosaurus-excelsus.png'
//     },
//     {
//         id: "dino3",
//         name: 'Steve',
//         type: 'Raptor',
//         age: 75,
//         owner: 'David',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://static.turbosquid.com/Preview/2016/08/15__05_40_23/square1.pngCAADFB60-670E-4F7D-A482-9CF6DE52E3A8Zoom.jpg'
//     },
//     {
//         id: "dino4",
//         name: 'Gary',
//         type: 'Stegosaurus',
//         age: 500,
//         owner: 'David',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://www.everythingdinosaur.com/wp-content/uploads/2016/09/CollectA_Stegosaurus_dinosaur_model.jpg'
//     },
//     {
//         id: "dino5",
//         name: 'George',
//         type: 'Raptor',
//         age: 150,
//         owner: 'Luke',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51TfdrlWYXL._AC_SY450_.jpg'
//     },
//     {
//         id: "dino6",
//         name: 'Trevor',
//         type: 'T Rex',
//         age: 300,
//         owner: 'Zoe',
//         adventures: [],
//         health: 100,
//         imageUrl: 'https://i5.walmartimages.com/asr/7a8fe80a-08e0-4252-a34a-c408d875d3fa_1.0a218c482f872054c96f06781a57b713.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff'
//     }
// ];


const dinos = [];

const formCollapse = () => {
    document.getElementById("collapseOne").classList.remove("show");
    document.getElementById("collapseOne").classList.toggle("collapsed");
    document.getElementById("accordion-button").setAttribute("aria-expanded", "false");
}

// const isEmpty = (x) => /^\s*$/.test(x);

// const newDinoObject = (id, name, type, age, owner, imageUrl) => {
//     let newDino = {
//         id,
//         name,
//         type,
//         age,
//         owner,
//         adventures: [],
//         health: 100,
//         imageUrl,
//     }
//     dinos.push(newDino);
//     document.getElementById("dino-form").reset();
//     console.log(dinos);
// }

const newDino = () => {
    const brandNewDino = {
        id: `dino${dinos.length + 1}`,
        name: document.getElementById("dino-name").value,
        type: document.getElementById("dino-type").value,
        age: document.getElementById("dino-age").value,
        owner: document.getElementById("dino-owner").value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById("dino-pic").value,
    }
    dinos.push(brandNewDino);
    document.getElementById("dino-form").reset();
    console.log(dinos);
}

const events = () => {
    document.getElementById("submit-new-dino").addEventListener("click", newDino);
}

const init = () => {
    events();
}

init();
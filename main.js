const dinos = [
    {
        id: "dino1",
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 0,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61vkPO-v8fL._AC_SL1200_.jpg'
    },
    {
        id: "dino2",
        name: 'Bob',
        type: 'Brontosaurus',
        age: 150,
        owner: 'Zoe',
        adventures: [],
        health: 1,
        imageUrl: 'https://www.factsjustforkids.com/images/brontosaurus-excelsus.png'
    },
    {
        id: "dino3",
        name: 'Steve',
        type: 'Raptor',
        age: 75,
        owner: 'David',
        adventures: [],
        health: 45,
        imageUrl: 'https://static.turbosquid.com/Preview/2016/08/15__05_40_23/square1.pngCAADFB60-670E-4F7D-A482-9CF6DE52E3A8Zoom.jpg'
    },
    {
        id: "dino4",
        name: 'Gary',
        type: 'Stegosaurus',
        age: 500,
        owner: 'David',
        adventures: [],
        health: 100,
        imageUrl: 'https://www.everythingdinosaur.com/wp-content/uploads/2016/09/CollectA_Stegosaurus_dinosaur_model.jpg'
    },
    {
        id: "dino5",
        name: 'George',
        type: 'Raptor',
        age: 150,
        owner: 'Luke',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51TfdrlWYXL._AC_SY450_.jpg'
    },
    {
        id: "dino6",
        name: 'Trevor',
        type: 'T Rex',
        age: 300,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://i5.walmartimages.com/asr/7a8fe80a-08e0-4252-a34a-c408d875d3fa_1.0a218c482f872054c96f06781a57b713.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const closeSingleViewEvent = () => {
    printToDom("single-view", "");
    buildAllDinos(dinos);
}

const viewSingleDino = (e) => {
    const dinoId = e.target.closest(".card").id;
    const selectedDino = dinos.find((x) => dinoId === x.id);
    let domString = "";
    domString += '<button id="close-single-view" class="btn btn-outline-light"><i class="fas fa-eye"></i></button>';
    domString += '<div class="container">';
    domString +=    '<div class="row">';
    domString +=        '<div class="col-6 card-separate">'
    domString +=            '<div class="card">';
    domString +=                `<img class="my-img" src="${selectedDino.imageUrl}" alt="whatever">`;
    domString +=            '</div>';
    domString +=        '</div>'
    domString +=        '<div class="col-6 card-separate">'
    domString +=            '<div class="card">';
    domString +=                `<h2>${selectedDino.name}</h2>`;
    domString +=                `<p>Type: ${selectedDino.type}</p>`;
    domString +=                `<p>Age: ${selectedDino.age}</p>`;
    domString +=                `<p>Owner: ${selectedDino.owner}</p>`;
    domString +=                `<div class="progress">`;
    domString +=                    `<div class="progress-bar bg-danger" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100"></div>`;
    domString +=                `</div>`;
    domString +=            '</div>';
    domString +=        '</div>';
    domString +=    '</div>';
    domString += '</div>';
    clearAllDinos();
    printToDom("single-view", domString);
    document.getElementById("close-single-view").addEventListener("click", closeSingleViewEvent);
}

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName("single-dino");
    for (let i = 0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener("click", viewSingleDino);
    }
}

const dinoHealth = (e) => {
    const dinoId = e.target.closest(".card").id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    if (dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health += 1;
        buildAllDinos(dinos);
    }
}

const petEvents = () => {
    const dinoPetImages = document.getElementsByClassName("dino-photo");
    for (let i = 0; i < dinoPetImages.length; i++) {
        dinoPetImages[i].addEventListener("mouseleave", dinoHealth);
    }
}

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest(".card").id;
    const dinoPosition = dinos.findIndex((x) => x.id === dinoId);
    dinos.splice(dinoPosition, 1);
    buildAllDinos(dinos);
}

const deleteEvents = () => {
    const dinoDeleteButtons = document.getElementsByClassName("delete-dino");
    for (let i = 0; i < dinoDeleteButtons.length; i++) {
        dinoDeleteButtons[i].addEventListener("click", deleteDinoEvent);
    }
}

const feedDino = (e) => {
    const dinoId = e.target.closest(".card").id;
    const dinoPosition = dinos.findIndex((x) => x.id === dinoId);
    if (dinos[dinoPosition].health < 90) {
        dinos[dinoPosition].health += 10;
        buildAllDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health = 100;
        buildAllDinos(dinos);
    }
}

const feedEvents = () => {
    const feedDinoButtons = document.getElementsByClassName("feed-dino");
    for (let i = 0; i < feedDinoButtons.length; i++) {
        feedDinoButtons[i].addEventListener("click", feedDino);
    }
}

const hospitalDomStringBuilder = (dinoArr) => {
    let domString = "";
    for (let i = 0; i < dinoArr.length; i++) {
        domString += '<div class="col-4 card-separate">';
        domString +=   `<div id="${dinoArr[i].id}" class="card">`;
        domString +=       `<img src="${dinoArr[i].imageUrl}" class="my-img img-fluid card-img-top dino-photo" alt="Card image cap">`;
        domString +=       '<div class="card-body">';
        domString +=           `<h5 class="card-title">${dinoArr[i].name}</h5>`;
        domString +=           `<div class="progress">`;
        domString +=                `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArr[i].health}%" aria-valuenow="${dinoArr[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
        domString +=            `</div>`;
        domString +=            '<button class="btn btn-outline-warning feed-dino"><i class="fas fa-hamburger"></i></button>';
        domString +=            '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
        domString +=            '<button class="btn btn-outline-danger delete-dino"><i class="fas fa-trash-alt"></i></button>';
        domString +=       '</div>';
        domString +=   '</div>';
        domString += '</div>';
    }
    printToDom("hospital", domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
}

const deadDinoDomStringBuilder = (dinoArr) => {
    let domString = "";
    for (let i = 0; i < dinoArr.length; i++) {
        domString += '<div class="col-4 card-separate">';
        domString +=   `<div id="${dinoArr[i].id}" class="card">`;
        domString +=       `<img src="${dinoArr[i].imageUrl}" class="my-img img-fluid card-img-top dino-photo" alt="Card image cap">`;
        domString +=       '<div class="card-body">';
        domString +=           `<h5 class="card-title">${dinoArr[i].name}</h5>`;
        domString +=            '<div><i class="fas fa-skull-crossbones"></i></div>'
        domString +=       '</div>';
        domString +=   '</div>';
        domString += '</div>';
    }
    printToDom("graveyard", domString);
    singleDinoAddEvents();
}

const printDinos = (dinoArr) => {
    let domString = "";
    for (let i = 0; i < dinoArr.length; i++) {
        domString += '<div class="col-4 card-separate">';
        domString +=   `<div id="${dinoArr[i].id}" class="card">`;
        domString +=       `<img src="${dinoArr[i].imageUrl}" class="my-img img-fluid card-img-top dino-photo" alt="Card image cap">`;
        domString +=       '<div class="card-body">';
        domString +=           `<h5 class="card-title">${dinoArr[i].name}</h5>`;
        domString +=           `<div class="progress">`;
        domString +=                `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArr[i].health}%" aria-valuenow="${dinoArr[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
        domString +=            `</div>`;
        domString +=            '<button class="btn btn-outline-warning feed-dino"><i class="fas fa-hamburger"></i></button>';
        domString +=            '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
        domString +=            '<button class="btn btn-outline-danger delete-dino"><i class="fas fa-trash-alt"></i></button>';
        domString +=       '</div>';
        domString +=   '</div>';
        domString += '</div>';
    }
    printToDom("kennel", domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
}

const newDino = (e) => {
    e.preventDefault();
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
    document.getElementById("collapseOne").classList.remove("show");
    buildAllDinos();
}

const findHospitalDinos = (dinos) => {
    const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
    hospitalDomStringBuilder(hospitalDinos);
}

const findDeadDinos = () => {
    const deadDinos = dinos.filter((x) => x.health < 1);
    deadDinoDomStringBuilder(deadDinos);
}

const clearAllDinos = () => {
    printToDom("kennel", "");
    printToDom("hospital", "");
    printToDom("graveyard", "");
}

const buildAllDinos = () => {
    printDinos(dinos);
    findHospitalDinos(dinos);
    findDeadDinos(dinos);
}

const events = () => {
    document.getElementById("submit-new-dino").addEventListener("click", newDino);
}

const init = () => {
    events();
    buildAllDinos();
}

init();
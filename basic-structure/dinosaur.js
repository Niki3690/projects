var txtFileData = [
    {
        "name": "Brachiosaurus",
        "image": "Brachiosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Brachiosaurus",
    },
    {
        "name": "Tyrannosaurus rex",
        "image": "Tyrannosaurus-rex (1)1.jpg",
        "link": "https://en.wikipedia.org/wiki/Tyrannosaurus",
    },
    {
        "name": "Stegosaurus",
        "image": "Stegosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Stegosaurus",
    },
    {
        "name": "Triceratops",
        "image": "Triceratops (1)1.jpg",
        "link": "https://en.wikipedia.org/wiki/Triceratops",
    },
    {
        "name": "Apatosaurus",
        "image": "Apatosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Apatosaurus",
    },
    {
        "name": "Pterodactyl",
        "image": "Pterodactyl1.jpg",
        "link": "https://en.wikipedia.org/wiki/Pterosaur",
    },
    {
        "name": "Velociraptor",
        "image": "Velociraptor1.jpg",
        "link": "https://en.wikipedia.org/wiki/Velociraptor",
    },
    {
        "name": "Spinosaurus",
        "image": "Spinosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Spinosaurus",
    },
    {
        "name": "Mosasaurus",
        "image": "Mosasaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Mosasaurus",
    },
    {
        "name": "Iguanodon",
        "image": "Iguanodon1.jpg",
        "link": "https://en.wikipedia.org/wiki/Iguanodon",
    },
    {
        "name": "Carnotaurus",
        "image": "Carnotaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Carnotaurus",
    },
    {
        "name": "Ankylosaurus",
        "image": "Ankylosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Ankylosaurus",
    },
    {
        "name": "Allosaurus",
        "image": "Allosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Allosaurus",
    },
    {
        "name": "Plesiosaurus",
        "image": "Plesiosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Plesiosaurus",
    },
    {
        "name": "Dilophosaurus",
        "image": "Dilophosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Dilophosaurus",
    },
    {
        "name": "Archaeopteryx",
        "image": "Archaeopteryx1.jpg",
        "link": "https://en.wikipedia.org/wiki/Archaeopteryx",
    },
    {
        "name": "Diplodocus",
        "image": "Diplodocus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Diplodocus",
    },
    {
        "name": "Gallimimus",
        "image": "Gallimimus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Gallimimus",
    },
    {
        "name": "Europasaurus",
        "image": "Europasaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Europasaurus",
    },
    {
        "name": "Parasaurolophus",
        "image": "Parasaurolophus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Parasaurolophus",
    },
    {
        "name": "Hadrosaurus",
        "image": "Hadrosaurus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Hadrosaurus",
    },
    {
        "name": "Troodon",
        "image": "Troodon1.jpg",
        "link": "https://en.wikipedia.org/wiki/Troodon",
    },
    {
        "name": "Coelophysis",
        "image": "Coelophysis1.jpg",
        "link": "https://en.wikipedia.org/wiki/Coelophysis",
    },
    {
        "name": "Deinonychus",
        "image": "Deinonychus1.jpg",
        "link": "https://en.wikipedia.org/wiki/Deinonychus",
    },
    {
        "name": "Dimorphodon",
        "image": "Dimorphodon1.jpg",
        "link": "https://en.wikipedia.org/wiki/Dimorphodon",
    }
]



function generateButton() {
    let result = document.getElementById("result");
    let value = document.getElementById("randomNumber").value;
    result.innerHTML = '';


    for (i = 1; i <= value; i++) {
        let random = Math.floor(Math.random() * 25);
        txtFileData[random]
      
        console.log("random:->" + random)

        let element = txtFileData[random]
        console.log("element:->" + element)
       

        document.getElementById("generatedCities").innerHTML = value;
        document.getElementById("citySectionArea").innerHTML = "";
       
        // document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><footer class="card-footer"><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></footer></div></div></div>`

        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`
        



    };
}





function primary() {
    let result = document.getElementById("result");
    let value = 5
    result.innerHTML = '';
    // var txtFileData=[]

    for (i = 1; i <= value; i++) {
        let random = Math.floor(Math.random() * 25);
        txtFileData[random]
        console.log("random:->" + random)

        let element = txtFileData[random]
        console.log("element:->" + element)

        document.getElementById("generatedCities").innerHTML = value;
        document.getElementById("citySectionArea").innerHTML = "";


        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`





    };
}





function info() {
    let result = document.getElementById("result");
    let value = 10
    result.innerHTML = '';


    for (i = 1; i <= value; i++) {
        let random = Math.floor(Math.random() * 25);
        txtFileData[random]
        console.log("random:->" + random)

        let element = txtFileData[random]
        console.log("element:->" + element)

        document.getElementById("generatedCities").innerHTML = value;
        document.getElementById("citySectionArea").innerHTML = "";


        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`



    };
}



function success() {
    let result = document.getElementById("result");
    let value = 15
    result.innerHTML = '';


    for (i = 1; i <= value; i++) {
        let random = Math.floor(Math.random() * 25);
        txtFileData[random]
        console.log("random:->" + random)

        let element = txtFileData[random]
        console.log("element:->" + element)

        document.getElementById("generatedCities").innerHTML = value;
        document.getElementById("citySectionArea").innerHTML = "";


        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`



    };
}






function outlined() {
    let x = Math.floor((Math.random() * 25) + 1);
    let result = document.getElementById("result");
    result.innerHTML = '';


    for (i = 1; i <= x; i++) {
        let random = Math.floor(Math.random() * 25);
        txtFileData[random]
        console.log("random:->" + random)

        let element = txtFileData[random]
        console.log("element:->" + element)

        document.getElementById("randomNumber").value = x;
        document.getElementById("generatedCities").innerHTML = x;
        document.getElementById("citySectionArea").innerHTML = "";



        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`



    };
}




    
//             while (txtFileData.length < 25) {
//               
//                 var random = Math.floor(Math.random() * 25) + 1;
//               
//                 if (txtFileData.indexOf(random) === 1) txtFileData.push(random);
//             }
//           
//             console.log("txtFileData:->" + txtFileData);





function showAll(all) {


    let result = document.getElementById("result");
    let value = 25
    result.innerHTML = '';


    for (i = 1; i <= value; i++) {
        

        // let random = Math.floor(Math.random() * 25)+1;
        let random = Math.floor(Math.random(txtFileData) * 25)+1;
        // txtFileData[randomNumber]
        console.log("random:->" + random)
        
        let element = txtFileData[i];
        console.log("element:->" + element)
      


        document.getElementById("randomNumber").value = value;
        document.getElementById("generatedCities").innerHTML = value;
        document.getElementById("citySectionArea").innerHTML = "";



        document.getElementById("result").innerHTML += `<div class="text has-text-centered"> <div class="column is-narrow "><div class="card has-background-light  has-text-centered customize-card"><div class="card-content"> <img class="tarot-card-image" src="${element.image}"></div><a href="${element.link}"><p class="card-footer-item title is-center is-size-4">${element.name}</p></a></div></div></div>`
        


    };
}
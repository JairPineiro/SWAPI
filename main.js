// Objeto que asocia los nombres de los personajes con las URLs de las imágenes
const characterImages = {
    'Luke Skywalker' : '/Images/Luke Skywalker.jpg',
    'Boba Fett' : '/Images/Boba Fett.jpg',
    'Anakin Skywalker' : '/Images/Anakin Skywalker.jpg',
    'Qui-Gon Jinn' : '/Images/Qui-Gon Jinn.jpg',
    'Quarsh Panaka' : '/Images/Quarsh Panaka.jpg',
    'Ki-Adi-Mundi' : '/Images/Ki-Adi-Mundi.jpg',
    'Cliegg Lars' : '/Images/Cliegg Lars.jpeg',
    'Lama Su' : '/Images/Lama Su.jpg',
    'C-3PO' : '/Images/C-3PO.jpg',
    'IG-88' : '/Images/IG-88.jpg',
    'Wilhuff Tarkin' : '/Images/Wilhuff Tarkin.jpg',
    'Shmi Skywalker' : '/Images/Shmi Skywalker.jpg',
    'Nute Gunray' : '/Images/Nute Gunray.jpg',
    'Kit Fisto' : '/Images/Kit Fisto.jpg',
    'Taun We' : '/Images/Taun We.jpeg',
    'Poggle the Lesser' : '/Images/Poggle the Lesser.jpeg',
    'R2-D2' : '/Images/R2-D2.jpg',
    'Darth Maul' : '/Images/Darth Maul.jpg',
    'Bossk' : '/Images/Bossk.jpg',
    'Chewbacca' : '/Images/Chewbacca.jpg',
    'Finis Valorum' : '/Images/Finis Valorum.jpg',
    'Jocasta Nu' : '/Images/Jocasta Nu.jpg',
    'Eeth Koth' : '/Images/Eeth Koth.jpg',
    'Luminara Unduli' : '/Images/Luminara Unduli.jpg',
    'Darth Vader' : '/Images/Darth Vader.jpg',
    'Bib Fortuna' : '/Images/Bib Fortuna.jpg',
    'Lando Calrissian' : '/Images/Lando Calrissian.jpg',
    'Han Solo' : '/Images/Han Solo.jpg',
    'Padmé Amidala' : '/Images/Padmé Amidala.jpg',
    'Adi Gallia' : '/Images/Adi Gallia.jpg',
    'Barriss Offee' : '/Images/Barriss Offee.jpg',
    'Leia Organa' : '/Images/Leia Organa.jpg',
    'Ayla Secura' : '/Images/Ayla Secura.jpg',
    'Lobot' : '/Images/Lobot.jpg',
    'Greedo' : '/Images/Greedo.jpg',
    'Jar Jar Binks' : '/Images/Jar Jar Binks.jpg',
    'Saesee Tiin' : '/Images/Saesee Tiin.jpg',
    'Dormé' : '/Images/Dormé.jpg',
    'Owen Lars' : '/Images/Owen Lars.jpg',
    'Ratts Tyerel' : '/Images/Ratts Tyerel.jpg',
    'Ackbar' : '/Images/Ackbar.jpg',
    'Yarael Poof' : '/Images/Yarael Poof.jpg',
    'Jabba Desilijic Tiure' : '/Images/Jabba Desilijic Tiure.jpg',
    'Roos Tarpals' : '/Images/Roos Tarpals.jpg',
    'Dooku' : '/Images/Dooku.jpg',
    'Beru Whitesun lars' : '/Images/Beru Whitesun lars.jpg',
    'Dud Bolt' : '/Images/Dud Bolt.jpg',
    'Mon Mothma' : '/Images/Mon Mothma.jpg',
    'Plo Koon' : '/Images/Plo Koon.jpg',
    'Wedge Antilles' : '/Images/Wedge Antilles.jpg',
    'Rugor Nass' : '/Images/Rugor Nass.jpg',
    'Bail Prestor Organa' : '/Images/Bail Prestor Organa.jpg',
    'R5-D4' : '/Images/R5-D4.jpg',
    'Gasgano' : '/Images/Gasgano.jpg',
    'Arvel Crynyd' : '/Images/Arvel Crynyd.jpg',
    'Mas Amedda' : '/Images/Mas Amedda.jpg',
    'Ric Olié' : '/Images/Ric Olié.jpg',
    'Jango Fett' : '/Images/Jango Fett.jpg',
    'Biggs Darklighter' : '/Images/Biggs Darklighter.jpg',
    'Ben Quadinaros' : '/Images/Ben Quadinaros.jpg',
    'Wicket Systri Warrick' : '/Images/Wicket Systri Warrick.jpg',
    'Watto' : '/Images/Watto.jpeg',
    'Zam Wesell' : '/Images/Zam Wesell.jpg',
    'Obi-Wan Kenobi' : '/Images/Obi-Wan Kenobi.jpg',
    'Mace Windu' : '/Images/Mace Windu.jpg',
    'Nien Nunb' : '/Images/Nien Nunb.jpg',
    'Sebulba' : '/Images/Sebulba.jpg',
    'Dexter Jettster' : '/Images/Dexter Jettster.jpg',
};

// Función para mostrar la información de un personaje junto con su imagen
function showCharacter(character, species, homeworld,films, starships,vehicles) {
    const imageUrl = characterImages[character.name];
    const cardContainer = document.querySelector('#cards');
    const cardHTML = `
          <div class="card"  data-films="${films}" data-starships="${starships}" data-vehicles="${vehicles}">
                <img src="${imageUrl}" class=""  alt="Imagen de ${character.name}">
                <div class="card-basic-info">
                    <h5>${character.name}</h5>
                    <p>Species: <span>${species}</span></p>
                    <p>Homeworld: <span>${homeworld}</span></p>
                    <button class="more-button">More...</button>
                </div>
            </div>`;
    cardContainer.innerHTML += cardHTML

    const moreButtons = document.querySelectorAll('.more-button');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            console.log("Films:", card.dataset.films);
            console.log("Starships:", card.dataset.starships);
            console.log("Vehicles:", card.dataset.vehicles);
            const films = card.dataset.films.split(',');
            const starships = card.dataset.starships.split(',');
            const vehicles = card.dataset.vehicles.split(',')
            expandCard(card, films, starships, vehicles)
        });
    });
}

    function expandCard(card, films, starships, vehicles) {
        const clonedCard = card.cloneNode(true);
        clonedCard.classList.add('expanded-card');

        const moreButton = clonedCard.querySelector('.more-button');
        if (moreButton) {
            moreButton.remove();
        }

        const additionalInfoContainer = document.createElement('div');
        additionalInfoContainer.classList.add('additional-info');
        const filmsText = document.createElement('p');
        filmsText.textContent = 'Films:';
        additionalInfoContainer.appendChild(filmsText);

        const filmsList = document.createElement('ul');
        films.forEach(film => {
            const listItem = document.createElement('li');
            listItem.textContent = film;
            filmsList.appendChild(listItem);
        });
        additionalInfoContainer.appendChild(filmsList);

        const starshipsText = document.createElement('p');
        starshipsText.textContent = 'Starships:';
        additionalInfoContainer.appendChild(starshipsText);
        
        const starshipsList = document.createElement('ul');
        starships.forEach(starship => {
            const listItem = document.createElement('li');
            listItem.textContent = starship;
            starshipsList.appendChild(listItem);
        });
        additionalInfoContainer.appendChild(starshipsList);

        const vehiclesText = document.createElement('p');
        vehiclesText.textContent = 'Vehicles:';
        additionalInfoContainer.appendChild(vehiclesText);

        const vehiclesList = document.createElement('ul');
        vehicles.forEach(vehicle => {
            const listItem = document.createElement('li');
            listItem.textContent = vehicle;
            vehiclesList.appendChild(listItem);
        });
        additionalInfoContainer.appendChild(vehiclesList);
            
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-button');

        closeButton.addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
            clonedCard.remove();
        });

        additionalInfoContainer.appendChild(closeButton);

        clonedCard.appendChild(additionalInfoContainer);
        document.body.appendChild(clonedCard);
        document.getElementById('overlay').style.display = 'block';

}

async function fetchAdditionalData(urls) {
    try {
        const responseData = await Promise.all(
            urls.map(async url => {
                const response = await fetch(url);
                return await response.json();
            })
        );
        return responseData;
    } catch (error) {
        console.error('Error fetching additional data:', error);
        return [];
    }
}
// Función para obtener y mostrar los personajes de SWAPI
async function fetchCharacters(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }
        const characterData = await response.json();
        for (const character of characterData.results) {
            const speciesResponse = await fetch(character.species);
            const speciesData = await speciesResponse.json();
            const homeworldResponse = await fetch(character.homeworld);
            const homeworldData = await homeworldResponse.json();
            const filmResponses = await fetchAdditionalData(character.films);
            const filmsData = filmResponses.map(film => film.title);
            const starshipResponses = await fetchAdditionalData(character.starships);
            const starshipsData = starshipResponses.map(starship => starship.name);
            const vehicleResponses = await fetchAdditionalData(character.vehicles);
            const vehiclesData = vehicleResponses.map(vehicle => vehicle.name);
            

            showCharacter(character, speciesData.name, homeworldData.name, filmsData, starshipsData,vehiclesData);
        }
    } catch (error) {
        console.error();
    }
}

const inputSearch = document.getElementById('search');

inputSearch.addEventListener('input', searchCharacter);

function searchCharacter() {
    const searchValue = inputSearch.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const elementName = card.querySelector('.card-basic-info h5');
        const elementHomeworld = card.querySelector('.card-basic-info p');
        const elementFilms = card.dataset.films.split(',').map(film => film.trim().toLowerCase());
        if (elementName && elementHomeworld && elementFilms) {
            const characterName = elementName.textContent.trim().toLowerCase();
            const characterHomeworld = elementHomeworld.textContent.trim().toLowerCase();
            if (characterName.includes(searchValue) || characterHomeworld.includes(searchValue) || 
            elementFilms.some(film => film.includes(searchValue))) {
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; 
            }
        }
    });
}

for (let i = 1; i <= 9; i++) {
    fetchCharacters(`https://swapi.py4e.com/api/people/?page=${i}`);
}

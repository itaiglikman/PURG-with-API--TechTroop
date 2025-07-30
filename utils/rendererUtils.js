const mainUserName = $('#main-user-name');
const mainUserLocation = $('#main-user-location');
const mainUserImage = $('#main-user-image');
const friendsUl = $('#friends-list');
const quote = $('#quote-text');
const pokemonImage = $('#pokemon-image');
const pokemonName = $('#pokemon-name');
const aboutMe = $('#aboutme-text');

function displayUsers(state) {
    if (state.mainUser) {
        $(mainUserName).text(state.mainUser.getFullName());
        $(mainUserLocation).text(state.mainUser.getFullAddress());
        $(mainUserImage).attr('src', state.mainUser.imageURL);

        // friends side bar:
        state.friends.forEach(f => {
            const li = $('<li>').text(f.getFullName());
            $(friendsUl).append(li);
        });
    } else {
        $(mainUserName).text(`X`);
        $(mainUserLocation).text(`X User couldn't be loaded`)
        $(mainUserImage).empty();
        $(friendsUl).empty();
    }
}

function displayQuote(quoteState) {
    quoteState
        ? $(quote).text(quoteState)
        : $(quote).text(`X Quote couldn't be loaded`);
}

function displayPokemon(pokemonObj) {
    if (pokemonObj) {
        $(pokemonName).text(pokemonObj.name);
        $(pokemonImage).attr('src', pokemonObj.imageURL);
    } else
        $(pokemonName).text(`X Pokemon couldn't be loaded`);
}

function displayAboutMe(aboutMeState) {
    aboutMeState
        ? $(aboutMe).text(aboutMeState)
        : $(aboutMe).text(`X About me couldn't be loaded`);
}

export default {
    displayUsers,
    displayQuote,
    displayPokemon,
    displayAboutMe
}

function Renderer(state) {

    const mainUserName = $('#main-user-name');
    const mainUserLocation = $('#main-user-location');
    const mainUserImage = $('#main-user-image');
    const friendsUl = $('#friends-list');
    $(friendsUl).empty(); //empty ul before every loading
    const quote = $('#quote-text');
    const pokemonImage = $('#pokemon-image');
    const pokemonName = $('#pokemon-name');
    const aboutMe = $('#aboutme-text');

    // main user header:
    $(mainUserName).text(state.mainUser.getFullName());
    $(mainUserLocation).text(state.mainUser.getFullAddress());
    $(mainUserImage).attr('src', state.mainUser?.imageURL);
    
    // friends side bar:
    state.friends.forEach(f => {
        const li = $('<li>').text(f.getFullName());
        $(friendsUl).append(li);
    });
    
    // quote:
    $(quote).text(state.quote);
    
    // pokemon:
    $(pokemonName).text(state.pokemon.name);
    $(pokemonImage).attr('src', state.pokemon?.imageURL);
    
    // aboutMe:
    $(aboutMe).text(state.aboutMe);


}

export default Renderer;
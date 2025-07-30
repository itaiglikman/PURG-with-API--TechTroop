function handleApiSuccess(results, state) {
    const [users, quote, pokemon, aboutMe] = results;
    const ful = 'fulfilled';
    let didFail = false;

    if (users.status === ful)
        state.createUsers(users.value);
    else {
        console.error(`getUsers failed:`, users.reason);
        state.mainUser = null;
        state.friends = [];
        didFail = true;
    }

    if (quote.status === ful)
        state.quote = quote.value;
    else {
        state.quote = null;
        console.error(`getQuote failed:`, quote.reason);
        didFail = true;
    }

    if (pokemon.status === ful) {
        pokemon.value.name = pokemon.value.name
            .split('-')
            .map(part => part[0].toUpperCase() + part.slice(1))
            .join(' ');
        state.pokemon = pokemon.value;
    }
    else {
        state.pokemon = null;
        console.error(`getPokemon failed:`, pokemon.reason);
        didFail = true;
    }

    if (aboutMe.status === ful)
        state.aboutMe = aboutMe.value;
    else {
        state.aboutMe = null;
        console.error(`getAboutMe failed:`, aboutMe.reason);
        didFail = true;
    }

    if (didFail) alert('some error accrued, please try again later');

    return didFail;
}

export default {
    handleApiSuccess,
}
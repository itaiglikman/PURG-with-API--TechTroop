// control all parts of the app
import APIManager from "./models/APIManager.js";
import PageState from "./models/PageDataState.js";

const api = new  APIManager();
const state = new PageState();


async function render(){
    try {
        const apiUsers = await api.getUsers();
        state.createUsers(apiUsers);
        const apiQuote = await api.getQuote();
        state.quote = apiQuote;
        const apiPokemon = await api.getRandomPokemon();
        state.pokemon = apiPokemon;
        const apiAboutMe = await api.getMeat();
        state.aboutMe = apiAboutMe;
        
        console.log(state);
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

render();
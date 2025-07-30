// control all parts of the app
import APIManager from "./models/APIManager.js";
import PageState from "./models/PageDataState.js";
import Renderer from "./view/renderer.js";

const api = new APIManager();
const state = new PageState();

async function loadData() {
    try {
        const apiUsers = await api.getUsers();
        state.createUsers(apiUsers);
        const apiQuote = await api.getQuote();
        state.quote = apiQuote;
        const apiPokemon = await api.getRandomPokemon();
        state.pokemon = apiPokemon;
        const apiAboutMe = await api.getMeat();
        state.aboutMe = apiAboutMe;
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

$('#load-user-btn').on('click', async () => {
    await loadData();
    Renderer(state);
})

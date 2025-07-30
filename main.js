import APIManager from "./models/APIManager.js";
import PageState from "./models/PageDataState.js";
import User from "./models/User.js";
import controllerUtils from "./utils/controllerUtils.js";
import Renderer from "./view/renderer.js";

const api = new APIManager();
let state = new PageState();
const storedState = 'storedState';

async function loadData() {
    try {
        const results = await Promise.allSettled([
            api.getUsers(),
            api.getQuote(),
            api.getRandomPokemon(),
            api.getMeat()
        ]);

        const didFail = controllerUtils.handleApiSuccess(results, state);

        // make save btn enabled only when valid results
        $('#save-user-btn').prop('disabled', didFail); 

    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

// generate user event:
$('#generate-user-btn').on('click', async () => {
    await loadData();
    Renderer(state);
});

// save user event:
$('#save-user-btn').on('click', () => {
    localStorage.setItem(storedState, JSON.stringify(state));
    $('#load-user-btn').prop('disabled', false);
});

// load user event:
$('#load-user-btn').on('click', () => {
    const saved = localStorage.getItem(storedState);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    // deep copy of nested object:
    state = new PageState();
    state.mainUser = { ...parsed.mainUser };
    state.friends = parsed.friends.map(u => {
        return { firstName: u.firstName, lastName: u.lastName };
    });
    state.quote = parsed.quote;
    state.pokemon = parsed.pokemon;
    state.aboutMe = parsed.aboutMe;
    console.log('load-user-btn ', state);
    Renderer(state);
});
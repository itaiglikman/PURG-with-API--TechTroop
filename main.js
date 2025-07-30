// control all parts of the app
import APIManager from "./models/APIManager.js";
import PageState from "./models/PageDataState.js";
import Renderer from "./view/renderer.js";

const api = new APIManager();
const state = new PageState();

async function loadData() {
    try {
        const results = await Promise.allSettled([
            api.getUsers(),
            api.getQuote(),
            api.getRandomPokemon(),
            api.getMeat()
        ]);

        const ful = 'fulfilled';
        if (results[0].status === ful)
            state.createUsers(results[0].value);

        if (results[1].status === ful)
            state.quote = results[1].value;

        if (results[2].status === ful)
            state.pokemon = results[2].value;

        if (results[3].status === ful)
            state.aboutMe = results[3].value;


        results.forEach((result, i) => {
            if (result.status === "rejected")
                console.error(`Request ${i} failed:`, result.reason);
        });
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

$('#load-user-btn').on('click', async () => {
    await loadData();
    Renderer(state);
});
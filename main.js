import APIManager from "./models/APIManager.js";
import PageState from "./models/PageDataState.js";
import { handleApiSuccess } from "./utils/controllerUtils.js";
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

        const didFail = handleApiSuccess(results, state);

        if(didFail) alert('some error accrued, please try again later');

        

    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

$('#load-user-btn').on('click', async () => {
    await loadData();
    Renderer(state);
});
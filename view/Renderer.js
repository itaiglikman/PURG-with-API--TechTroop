import rendererUtils from "../utils/rendererUtils.js";

    function Renderer(state) {

        $('#friends-list').empty(); //empty ul before every loading
        rendererUtils.displayUsers(state) // main user header:
        rendererUtils.displayQuote(state.quote);// quote:
        rendererUtils.displayPokemon(state.pokemon); // pokemon:
        rendererUtils.displayAboutMe(state.aboutMe);  // aboutMe:
    }

export default Renderer;
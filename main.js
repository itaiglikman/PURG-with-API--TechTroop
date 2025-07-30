// control all parts of the app
import APIManager from "./models/APIManager.js";

const api = new  APIManager();




async function render(){
    try {
        
        const users = await api.getUsers();
        const quote = await api.getQuote();
        const pokemon = await api.getRandomPokemon();
        const meat = await api.getMeat();
        
        console.log(users);
        console.log(quote);
        console.log(pokemon);
        console.log(meat);
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

render();
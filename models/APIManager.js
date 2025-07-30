import ErrorMsg from "../utils/errors.js";
import ResponseStatus from "../utils/resonseStatus.js";

class APIManager {
    constructor() {
        // this.usersAPI = 'https://randomuser.me/api/';
        this.usersAPI = 'https://randomuser.me/api/?results=7/';
        this.quoteAPI = 'https://api.kanye.rest/';
        this.randPokemonApi = 'https://pokeapi.co/api/v2/pokemon/';
    }

    async getUsers() {
        try {
            const response = await axios.get(this.usersAPI);
            const users = response.data.results;
            return users;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

    async getQuote() {
        try {
            const response = await axios.get(this.quoteAPI);
            const quote = response.data.quote;
            return quote;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

    async getRandomPokemon() {
        try {
            const randNum = Math.floor(Math.random() * 1026);
            const response = await axios.get(this.randPokemonApi + randNum.toString());
            const pokemonName = response.data.forms[0].name;
            const pokemonImageUrl = response.data.sprites.front_default;
            const pokemon = {name:pokemonName,imageURL:pokemonImageUrl};
            return pokemon;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }

    }
}

export default APIManager;

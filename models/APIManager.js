class APIManager {
    constructor() {
        this.usersAPI = 'https://randomuser.me/api/?results=7/';
        this.quoteAPI = 'https://api.kanye.rest/';
        this.randPokemonApi = 'https://pokeapi.co/api/v2/pokemon/';
        this.meatAPI = 'https://baconipsum.com/api/?type=all-meat/';
    }

    //handle errors

    /**
     * @returns array with 7 random users objets
     */
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

    /**
     * @returns string of a random quote
     */
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

    /**
     * get full random pokemon object 
     * @returns object with name and image url
     */
    async getRandomPokemon() {
        try {
            const randNum = Math.floor(Math.random() * 1026);
            const response = await axios.get(this.randPokemonApi + randNum.toString());
            const pokemonName = response.data.forms[0].name;
            const pokemonImageUrl = response.data.sprites.front_default;
            const pokemon = { name: pokemonName, imageURL: pokemonImageUrl };
            return pokemon;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

    /**
     * get array of sentences
     * @returns string of a paragraph
     */
    async getMeat() {
        try {
            const response = await axios.get(this.meatAPI);
            const meat = response.data;
            let meatPara = '';
            meat.forEach(item => meatPara += item);
            return meatPara;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

}
export default APIManager;

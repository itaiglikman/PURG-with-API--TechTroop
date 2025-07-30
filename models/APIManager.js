import ErrorMsg from "../utils/errors.js";
import ResponseStatus from "../utils/resonseStatus.js";

class APIManager {
    constructor() {
        // this.usersAPI = 'https://randomuser.me/api/';
        this.usersAPI = 'https://randomuser.me/api/?results=7';
        this.quoteAPI = 'https://api.kanye.rest';
    }

    async getUsers() {
        try {
            const response = await axios.get(this.usersAPI);
            if (response.status !== ResponseStatus.OK)
                throw ErrorMsg.invalidResponse(response.status);
            const users = response.data.results;
            if (!users || users.length === 0)
                throw ErrorMsg.noUsersFound();
            return users;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }

    async getQuote() {
        try {
            const response = await axios.get(this.quoteAPI);
            if (response.status !== ResponseStatus.OK)
                throw ErrorMsg.invalidResponse(response.status);
            const quote = response.data.quote;
            if (!quote)
                throw ErrorMsg.noQuote();
            return quote;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }
}

export default APIManager;

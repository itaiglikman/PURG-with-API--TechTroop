class APIManager {
    constructor() {
        this.usersAPI = 'https://randomuser.me/api/?results=7';
        this.quoteAPI = 'https://api.kanye.rest';
    }

    async getUsers() {
        try {
            const response = await axios.get(this.usersAPI);
            const users = response.data.results
            return users;
        } catch (error) {
            console.error(error.message);
            throw new Error(error);
        }
    }
}

export default APIManager;

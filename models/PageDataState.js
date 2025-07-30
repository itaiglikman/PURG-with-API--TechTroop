import User from "./User.js";

class PageState {
    constructor() {
        this.mainUser = null;
        this.friends = [];
        this.quote = null;
        this.pokemon = null;;
        this.aboutMe = null;
    }

    createUsers(apiUsers) {
        const leanUsers = apiUsers.map(apiUser => new User(apiUser));
        this.mainUser = leanUsers[0];
        this.friends = leanUsers.slice(1);
    }
}

export default PageState;
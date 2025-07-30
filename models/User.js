class User {

    constructor(apiUser) {
        this.firstName = apiUser.name.first;
        this.lastName = apiUser.name.last;
        this.city = apiUser.location.city;
        this.country = apiUser.location.country;
        this.imageURL = apiUser.picture.medium;
    }

    getFullname() {
        return this.firstName + this.lastName;
    }

}

export default User;
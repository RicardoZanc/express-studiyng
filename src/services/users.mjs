import { ServiceError } from "../errors/serviceError.mjs";
import { userHelpers } from "../helpers/userHelpers.mjs";

const users = userHelpers.defineUsers();

export const userService = {

    getUsers: () => {
        return users
    },

    login: (credentials) => {
        const foundUser = users.find(user => credentials.name === user.name && credentials.password === user.password)
        if(!foundUser){
            throw new ServiceError('Invalid credentials', 404)
        }

        return foundUser;

    }

}



import axios from "axios";


/*export default {
    getRandomUserApi() {
        return axios.get("https://randomuser.me/api/?results=100")
    }

}*/


export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};
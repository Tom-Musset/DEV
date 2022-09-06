import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://www.wawasensei.dev/api/demo-auth/'
});

//create a new store instance 
const store = createStore({
    state:{
    },
    actions: {
        createAccount: ({commit}, userInfos) => {
            commit;
            instance.post('/createAccount',userInfos)
            .then(function (response) {
                console.log("response"+response);
            })
            .catch(function (error) {
                console.log("error"+error);
            });
        }
    }
})

export default store;
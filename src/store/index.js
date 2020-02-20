import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        tittle: 'Home Page',
        counter: 555
    },
    getters: {
        title(state) {
            return state.title.toUpperCase()
        }
    }
})
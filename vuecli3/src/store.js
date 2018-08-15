import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count:11,
        msg:'zss'
    },
    mutations: {
        add(state,num){
            state.count+= num;
        },
        sub(state){
            state.count--;
        }
    },
    actions: {

    },
});
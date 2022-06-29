import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socketurl: process.env.MIX_SOCKET_URL,
    },

    mutations: {
        // 
    },

    actions: {
        // 
    },

    modules: {
        auth,
    }
})
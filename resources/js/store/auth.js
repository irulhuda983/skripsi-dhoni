import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.baseURL = process.env.MIX_APP_API;
axios.defaults.withCredentials = true;

export default {
    namespaced: true,
    state: {
        token: null,
        user: []
    },

    getters: {
        authenticated(state) {
            return state.token;
        },

        user(state) {
            return state.user;
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        }
    },

    actions: {
        async signIn({ dispatch }, credentials) {
            let res = await axios.post("login", credentials);
            dispatch("attempt", res.data.token);
        },

        async attempt({ commit, state }, token) {
            if (token) {
                commit("SET_TOKEN", token);
            } else {
                // localStorage.removeItem('role')
                commit("SET_TOKEN", null);
                commit("SET_USER", []);
            }

            if (!state.token) {
                return;
            }

            try {
                let res = await axios.get("profil");
                let user = res.data.data;
                // localStorage.setItem('role', user.role)
                commit("SET_USER", user);
            } catch (e) {
                // localStorage.removeItem('role')
                commit("SET_TOKEN", null);
                commit("SET_USER", []);
                sessionStorage.clear();
            }
        },

        signOut({ commit }) {
            return axios.post("logout").then(() => {
                // localStorage.removeItem('role')
                localStorage.removeItem("token");
                commit("SET_TOKEN", null);
                commit("SET_USER", []);
                sessionStorage.clear();
            });
        },

        clear({ commit }){
            localStorage.removeItem("token");
            commit("SET_TOKEN", null);
            commit("SET_USER", []);
            sessionStorage.clear();
        }
    }
};
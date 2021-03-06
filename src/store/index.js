import Vue from "vue"
import Vuex from "vuex"
import RemarkDetails from "./modules/remark_details"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clientId: "",
    user: {
      name: "",
      pic: "",
      login: false
    }
  },
  getters: {
    getClientId(state) {
      return state.clientId;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setClientId(state, strClientId) {
      state.clientId = strClientId;
    },
    setUser(state, oUser) {
      state.user = oUser;
    }
  },
  modules: {
    RemarkDetails
  }
})

export default store

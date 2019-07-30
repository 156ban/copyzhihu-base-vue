import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    name: "",
    sex: "",
    job: "",
    address: ""
  },
  mutations: {
    setData(state, obj) {
      for (let key in obj) {
        state[key] = obj[key];
      }
    }
  },
  actions: {
  
  }
})

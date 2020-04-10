import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true
  },
  mutations: {
    toogleMenu(state,isVisible){
      if(isVisible === undefined){
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
      console.log('toogleMenu = ' + state.isMenuVisible)
    }
  }
})
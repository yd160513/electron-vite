import { createStore, StoreOptions } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 666
    }
  },
  mutations: {
    ADD(state: any) {
      state.count++
    }
  }
})

export default store
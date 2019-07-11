export default {
  namespaced: true,
  state: {
    history: [],
    title: ''
  },
  mutations: {
    addHistoy (state, router) {
      let history = state.history
      let ret = history.some(item => {
        if (item.path === router.path) return true
      })
      if (ret) {
        history.push(router)
        state.history = history
        history = null
      }
    },

    setTitle (state, value) {
      state.title = value
    }
  }
}

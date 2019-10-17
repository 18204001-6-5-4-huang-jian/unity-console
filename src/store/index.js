/**
 * Created by sunwd on 2018/9/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    ...modules
  },
  strict: debug
})

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const modules = require('./modules').default

    store.hotUpdate({
      modules: {
        ...modules
      }
    })
  })
}
export default store
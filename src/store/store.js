import Vue from 'vue'
import Vuex from 'vuex'
import WsCache from 'web-storage-cache'
import * as types from './types'

// 设置本地缓存（token）过期时间为 7 天
const exp = 3600 * 24 * 7
const ls = new WsCache()

Vue.use(Vuex)
export default new Vuex.Store({

})

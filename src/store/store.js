  
import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/api'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		retailers: []
	},
	actions: {
		async loadRetailers(context) {
			if(!context.state.retailers.length > 0) {
				try {
					console.log('Let me ask again, are we even trying?')
					const response =  await Api().get('/retailer')
					context.commit('setRetailerData', response.data)
				} catch (ex) {
					console.error('Something went wrong getting the retailers boss', ex)
				}
			}
		}
	},
	mutations: {
		setRetailerData(state, data) {
			console.log('data', data)
			state.retailers = data
		}
	},
	getters: {
		getAllRetailers(state) { return state.retailers }
	}
})
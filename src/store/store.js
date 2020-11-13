  
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
			state.retailers = data
		}
	},
	getters: {
		getAllRetailers(state) { return state.retailers },
		getRetailerById: (state) => (id) => {
			return state.retailers.find((r) => r.id == id) 
		}
	}
})
import Api from '@/api/api'
// PDT: Classically, this should work but doesn't. Using the base store for the time being
const state = {
    retailers: []
}
const actions = {
    async getAllRetailers(context) {
        console.log('are we even trying?')
        if(!context.state.retailers) {
            try {
                const response =  await Api().get('/retailer')
                context.commit('setRetailerData', response.data)
            } catch (ex) {
                console.error('Something went wrong getting the retailers boss', ex)
            }
        }
    }
}
const getters = {
    getAll(state) { return state.retailers }
}
const mutations = {
    setRetailerData(state, data) {
        console.log(data)
        state.retailers = data
    }
}
const namespaced = true
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}

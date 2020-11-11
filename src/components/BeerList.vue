<template>
    <div>
        <p>WAKKKA WAKKKA</p>
        <BaseButton text="Hi Smokes!" />
        <BaseButton text="Sir Smokey The Loaf McTokes" />
    </div>
</template>   

<script>
import BaseButton from './BaseButton.vue'
export default {
    name: 'BeerList',
    components: {
        BaseButton
    },
    data() {
        return {
            beers: []
        }
    },
    async mounted() {
        try {
            const beers = this.$http.get('/beers')
            this.beers = beers.data
        } catch (ex) {
            console.error('Problem getting beers boss: ', ex)
        }
    }    
}
</script>

<style>

</style>

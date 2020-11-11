<template>
    <ul>
        <li v-for="(brewery, index) in breweries" :key="index">
            {{ brewery.name }}
        </li>
    </ul>
</template>   

<script>
export default {
    name: 'AppBreweryList',
    data() {
        return {
            breweries: []
        }
    },
    async mounted() {
        try {
            const breweries = await this.$http.get('/brewery')
            this.breweries = breweries.data
        } catch (ex) {
            console.error('Problem getting breweries boss: ', ex)
        }
    }    
}
</script>

<style>

</style>

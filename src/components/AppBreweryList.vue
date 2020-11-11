<template>
    <!-- just sketching an idea -->
    <AppTileDisplay :tileData="breweryTileData">
    </AppTileDisplay>
</template>   

<script>
import AppTileDisplay from './AppTileDisplay'
export default {
    name: 'AppBreweryList',
    components: {
        AppTileDisplay
    },
    data() {
        return {
            breweries: []
        }
    },
    computed: {
        breweryTileData() {
            if(this.breweries) {
                return this.breweries.map((b) => {
                    return {name: b.name, description: b.description}
                }) 
            }
            return []
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

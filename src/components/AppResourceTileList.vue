<template>
    <AppTileDisplay :tileData="listData" :resourcePath="resourcePath">
    </AppTileDisplay>
</template>   

<script>
import AppTileDisplay from './AppTileDisplay'
export default {
    name: 'AppResourceTileList',
    components: {
        AppTileDisplay
    },
    props: {
        listData: Array,
        resourcePath: String
    },
    computed: {
        resourceTileData() {
            if(this.listData) {
                return this.listData.map((r) => {
                    return {id: r.id, name: r.name, description: r.description}
                }) 
            }
            return []
        }
    }
}
</script>

<style>

</style>
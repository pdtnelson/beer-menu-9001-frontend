<template>
    <AppTileDisplay :tileData="resourceTileData" :resourcePath="resourcePath">
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
        listData: Object,
        resourcePath: String
    },
    data() {
        return {
            resources: this.listData
        }
    },
    computed: {
        resourceTileData() {
            if(this.resources) {
                return this.resources.map((r) => {
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
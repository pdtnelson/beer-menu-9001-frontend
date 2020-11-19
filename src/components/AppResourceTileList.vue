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
    }
}
</script>

<style>

</style>
<template>
   <v-container>
        <v-row>
          <v-col
            v-for="(tile, index) in tileData"
            :key="index"
            cols="4"
          >
                <AppTile :title="tile.name" :content="tile.description" :resourcePath="resourcePath" :id="tile.id">
                    <slot></slot>
                </AppTile>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AppTile from './AppTile'

export default {
    name: 'AppTileDisplay',
    components: {
        AppTile
    },
    props: {
        tileData: Array, //id, name, description
        resourcePath: String
    }
}
</script>
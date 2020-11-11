<template>
   <v-container>
        <v-row>
          <v-col
            v-for="(tile, index) in tileData"
            :key="index"
            cols="4"
          >
                <AppTile :title="tile.name" :content="tile.description">
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
        tileData: [] //name, description
    }
}
</script>
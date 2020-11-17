<template>
   <v-container>
        <v-row>
          <v-col
            v-for="(tile, index) in tileData"
            :key="index"
            cols="4"
          >
                <AppTile :title="tile.name" :content="tile.description" :resourcePath="resourcePath" :id="tile.id" :defaultImg="defaultImg">
                    <slot></slot>
                </AppTile>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AppTile from '@/components/AppTile'

export default {
    name: 'AppTileDisplay',
    components: {
        AppTile
    },
    props: {
        tileData: Array, //id, name, description
        resourcePath: String
    },
    computed: {
        defaultImg() { // in case the resouces doesn't definte an image, come up with backups.
            try {
                return require(`@/assets${this.resourcePath}.png`) // TOOD: Fix hardcoded png filetype
            } catch {
                return require('@/assets/beer.png')
            }
        }
    }
}
</script>
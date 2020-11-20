<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            :src="defaultImg"
        ></v-img>

        <slot>
            <v-card-title>
                <router-link :to="{ name: linkName, params: { id:  id } }">{{ title }}</router-link>
            </v-card-title>
            <v-card-text>
                <div class="my-4 subtitle-1">
                    {{ content }}
                </div>
            </v-card-text>
        </slot>
    </v-card>   
</template>

<script>
export default {
    name: 'AppTile',
    props: {
        title: {
          type: String,
          required: true
        },
        content: {
          type: String,
          required: true
        },
        resourcePath: {
          type: String,
          required: true
        },
        id: {
          type: Number,
          required: true
        },
        defaultImg: {
          type: String,
          required: true
        }
    },
    computed: {
        linkName() {
            const stripSlash = this.resourcePath.substring(1)
            return stripSlash.charAt(0).toUpperCase() + stripSlash.slice(1)
        }
    }
}
</script>

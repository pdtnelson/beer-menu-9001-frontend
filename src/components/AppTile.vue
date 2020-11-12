<template>
    <v-card
        :loading="loading"
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
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <slot>
            <v-card-title>
                <router-link :to="{ name: linkName, params: { id: 1 } }">{{ title }}</router-link>
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
        title: String,
        content: String,
        resource: String
    },
    computed: {
        linkName() {
            const stripSlash = this.resource.substring(1)
            return stripSlash.charAt(0).toUpperCase() + stripSlash.slice(1)
        }
    }
}
</script>

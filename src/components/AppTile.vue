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

        <v-card-title>{{ title }}</v-card-title>

        <slot>
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
        content: String
    }
}
</script>

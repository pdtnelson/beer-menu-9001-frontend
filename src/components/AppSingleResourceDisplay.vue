<template>
    <v-container>
        <v-row>
            <v-col>
                <header> <!-- TOOD: add filepath prop for the background (if it exists, else default) -->
                    <slot name="header">
                        <h1>{{ resource.name }}</h1>
                    </slot>
                </header>
            </v-col>   
        </v-row>
        <slot name="content">
            <v-row>
                <v-col>
                    <section class="content">
                        <p>{{ resource.description}}</p>
                    </section>
                </v-col>
            </v-row>
        </slot>
        
    </v-container>
</template>

<script>
export default {
    name: 'AppResourceSingleDisplay',
    props: {
        resource: Object
    }
}
</script>

<style lang="scss" scoped>
    header {
        color: white;
        background-color: green;
        margin-left: -12px;
        margin-top: -24px;
        margin-right: -12px;
        min-height: 420px;
        padding: 12px;
        background-image: url('../assets/beer-taps.jpg');
        background-size: cover;
        background-position-y: -330px;

        h1 {
            font-size: 42px;
        }
    }
</style>



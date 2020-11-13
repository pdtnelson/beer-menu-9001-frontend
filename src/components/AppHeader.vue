<template>
    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
      <router-link :to="{ name: 'Home' }">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('@/assets/beer.png')"
            transition="scale-transition"
            width="40"
          />
          <h1>{{ title }}</h1>
        </div>
      </router-link>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
      logoImgSrc: String,
      title: String
    }
}
</script>

<style lang="scss" scoped>
  a {
    color: white;
    text-decoration: none;
  }
</style>



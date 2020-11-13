<template>
  <div id="app" v-if="!loading">
    <v-app>
      <AppHeader/>
      <v-main :class="{ 'grey lighten-3': $route.name !== 'Home'}">
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions({
      getAllRetailers: 'loadRetailers'
    })
  },
  async mounted() {
    await this.getAllRetailers()
    this.loading = false
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

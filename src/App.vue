<template>
  <div id="app">
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
export default {
  name: 'App',
  components: {
    AppHeader
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

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppBreweryList />
  </div>
</template>

<script>
import AppBreweryList from './components/AppBreweryList.vue'

export default {
  name: 'App',
  components: {
    AppBreweryList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

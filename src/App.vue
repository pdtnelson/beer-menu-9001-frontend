<template>
  <v-app>
    <AppHeader/>

    <v-main>
      <v-spacer></v-spacer>
      <AppBreweryList></AppBreweryList>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppBreweryList from './components/AppBreweryList'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppBreweryList
  },

  data: () => ({
    //
  }),
};
</script>

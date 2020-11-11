<template>
  <div class="home">
    <AppBreweryList></AppBreweryList>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBreweryList from '@/components/AppBreweryList.vue'

export default {
  name: 'Home',
  components: {
    AppBreweryList
  }
}
</script>

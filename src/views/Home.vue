<template>
  <div class="home">
    <app-resource-tile-list endpoint="/retailer"></app-resource-tile-list>
  </div>
</template>

<script>
// @ is an alias to /src
import AppResourceTileList from '@/components/AppResourceTileList.vue'

export default {
  name: 'Home',
  components: {
    AppResourceTileList
  }
}
</script>

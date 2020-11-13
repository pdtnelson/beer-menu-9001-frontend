<template>
  <div class="home">
    <app-resource-tile-list :listData="retailers" :resourcePath="'/retailer'"></app-resource-tile-list>
  </div>
</template>

<script>
// @ is an alias to /src
import AppResourceTileList from '@/components/AppResourceTileList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    AppResourceTileList
  },
  computed: {
    ...mapGetters({
      retailers: 'getAllRetailers'
    })
  }
}
</script>

<template>
  <div class="home">
    <app-resource-tile-list :listData="retailers" :resourcePath="'/retailer'"></app-resource-tile-list>
  </div>
</template>

<script>
// @ is an alias to /src
import AppResourceTileList from '@/components/AppResourceTileList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    AppResourceTileList
  },
  methods: {
    ...mapActions({
      getAllRetailers: 'loadRetailers'
    })
  },
  computed: {
    ...mapGetters({
      retailers: 'getAllRetailers'
    })
  },
  mounted() {
    this.getAllRetailers()
  }
}
</script>

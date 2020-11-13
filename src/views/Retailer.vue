<template>
    <v-container>
      <v-row v-if="retailer">
        <v-col cols="2">
          <v-sheet>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-content>
                  {{ retailer.name }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="n in 5"
                :key="n"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>
                    List Item {{ n }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item
                link
                color="grey lighten-4"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh">
            <resource-display v-if="retailer" :resource="retailerView.retailer">
              <template v-slot:header>
                <h1>{{ retailer.name }}</h1>
                <h2>{{ retailer.city }}</h2>  
              </template>
              <template v-slot:content>
                  <v-row>
                    <v-col>
                      <p>{{ retailer.description }}</p>
                    </v-col>
                  </v-row>
                  <v-row v-if="retailerView.menu">
                    <v-col>
                      <app-resource-tile-list :listData="retailerView.menu.beers" :resourcePath="'/beer'"></app-resource-tile-list>
                    </v-col>
                  </v-row>
              </template>  
            </resource-display>
          </v-sheet>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppSingleResourceDisplay from '@/components/AppSingleResourceDisplay'
import AppResourceTileList from '@/components/AppResourceTileList'
export default {
  name: 'Retailer',
  components: {
    'resource-display': AppSingleResourceDisplay,
    'app-resource-tile-list': AppResourceTileList
  },
  data: () => ({ 
    links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
    ],
    retailerMenu: null
  }),
  computed: {
    retailerView() {
      return {
        retailer: this.$store.getters['getRetailerById'](this.$route.params['id']),
        menu: this.retailerMenu
      }
    },
    retailer() {
      return this.retailerView.retailer
    }
  },
  methods: {
    async loadRetailerMenu() 
    {
      try {
        const response = await this.$http.get(`/retailer/${this.retailerView.retailer.id}/menu`)
        this.retailerMenu = response.data
      } catch(ex) {
        console.error(`Something went wrong getting the menu for retailer id ${this.retailerView.retailer.id}`, ex)
      }
    }
  },
  async mounted() {
    await this.loadRetailerMenu()
  }
}
</script>


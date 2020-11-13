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
            <resource-display v-if="retailer" :resource="retailer">
              <template v-slot:header>
                <h1>{{ retailer.name }}</h1>
                <h2>{{ retailer.city }}</h2>  
              </template>  
            </resource-display>
          </v-sheet>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppSingleResourceDisplay from '@/components/AppSingleResourceDisplay'
export default {
  name: 'Retailer',
  components: {
    'resource-display': AppSingleResourceDisplay
  },
  data: () => ({ 
    links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
    ],
    retailerMenu: {}
  }),
  computed: {
    retailer() {
      return this.$store.getters['getRetailerById'](this.$route.params['id'])
    }
  },
  methods: {
    async loadRetailerMenu() 
    {
      try {
        const response = await this.$http.get(`/retailer/${this.retailer.id}/menu`)
        this.retailerMenu = response.data
      } catch(ex) {
        console.error(`Something went wrong getting the menu for retailer id ${this.retailer.id}`, ex)
      }
    }
  },
  async mounted() {
    await this.loadRetailerMenu()
  }
}
</script>


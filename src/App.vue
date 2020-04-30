<template>
  <v-app>
    <appbar />
    <drawerbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <footbar />
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue";
import footbar from "@/components/Footer/index.vue";
import drawerbar from "@/components/Appbar/drawer.vue";
export default {
  name: "App",

  components: {
    appbar,
    footbar,
    drawerbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

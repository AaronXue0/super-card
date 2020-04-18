<template>
  <v-app>
    <appbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue";
export default {
  name: "App",

  components: {
    appbar
  },

  data: () => ({
    //
  })
};
</script>

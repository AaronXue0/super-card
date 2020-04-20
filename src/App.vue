<template>
  <v-app>
    <appbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <post />
    <footbar />
  </v-app>
</template>

<script>
import appbar from "@/components/Appbar/index.vue";
import post from "@/components/Post/index.vue";
import footbar from "@/components/Footer/index.vue";
export default {
  name: "App",

  components: {
    appbar,
    post,
    footbar
  },

  data: () => ({
    //
  })
};
</script>

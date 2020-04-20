<template>
  <v-app>
    <drawerbar :drawer="drawer" v-on:close-Drawer="closeDrawer" />
    <appbar v-on:open-drawer="openDrawer" />
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
    return {
      drawer: false
    };
  },
  methods: {
    openDrawer() {
      let vm = this;
      vm.drawer = true;
    },
    closeDrawer() {
      let vm = this;
      vm.drawer = false;
    }
  }
};
</script>

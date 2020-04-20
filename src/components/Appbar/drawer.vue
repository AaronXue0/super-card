<template>
  <v-navigation-drawer
    v-model="drawer"
    width="100%"
    absolute
    temporary
    color="warning"
    class="nav-drawer"
  >
    <v-btn icon fab color="secondary" @click="closeDrawer" fixed>
      <v-icon color="white">
        mdi-close
      </v-icon>
    </v-btn>
    <span v-if="getUser">{{ getUser.email }}</span>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["drawer"],
  methods: {
    closeDrawer() {
      this.$emit("close-Drawer");
    }
  },
  computed: {
    getUser: {
      get() {
        return this.$store.state.user;
      }
    }
  }
};
</script>

<style>
.nav-drawer {
  opacity: 80%;
}
</style>

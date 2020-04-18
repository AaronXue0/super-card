<template>
  <v-app-bar color="white" app fixed elevation="0">
    <v-app-bar-nav-icon color="white"
      ><v-icon color="secondary"> mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <span class="noto-font" v-if="getUser">{{ getUser.displayName }}</span>
    <v-btn icon color="white" @click="Login()">
      <v-icon large class="custom-starry-icon-left" color="secondary"
        >mdi-crop-free
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Login() {
      let vm = this;
      if (vm.getUser) return;
      vm.$store.dispatch("userSignIn");
    }
  },
  components: {},
  computed: {
    getUser() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.noto-font {
  font-family: "Noto Sans", sans-serif;
  color: #212121;
}
.custom-starry-icon-left {
  position: relative;
  transform: rotate(45deg);
}
</style>

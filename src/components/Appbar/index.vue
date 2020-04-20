<template>
  <v-app-bar color="white" app fixed elevation="0">
    <v-app-bar-nav-icon color="white"
      ><v-icon color="secondary"> mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <drawer />
    <v-spacer></v-spacer>
    <span class="noto-font" v-if="getUser">{{ getUser.displayName }}</span>
    <span class="noto-font" v-else>Sign In</span>
    <v-btn icon color="white" @click="Login()">
      <v-icon large class="custom-starry-icon-left" color="secondary"
        >mdi-crop-free
      </v-icon>
    </v-btn>
    <logout :dialog="dialog" v-on:cancel-dialog="cancelDialog" />
  </v-app-bar>
</template>

<script>
import logout from "@/components/Appbar/logout.vue";
import drawer from "@/components/Appbar/drawer.vue";

export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    Login() {
      let vm = this;
      if (vm.getUser) {
        vm.dialog = true;
        return;
      }
      vm.$store.dispatch("userSignIn");
    },
    cancelDialog() {
      this.dialog = false;
    }
  },
  components: {
    logout,
    drawer
  },
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

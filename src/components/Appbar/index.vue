<template>
  <v-app-bar color="white" app fixed elevation="0">
    <v-app-bar-nav-icon color="black" @click="openDrawer"> </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-dialog
      v-model="getLoading"
      persistent
      content
      content-class="centered-dialog"
    >
      <v-container fill-height>
        <v-row justify="center">
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="primary"
          ></v-progress-circular>
        </v-row>
      </v-container>
    </v-dialog>
    <span class="noto-font" v-if="getUser">{{ getUser.displayName }}</span>
    <span class="noto-font" v-else>Sign In</span>
    <v-btn icon color="white" @click="Login()">
      <v-icon large class="custom-starry-icon-left" color="primary"
        >mdi-crop-free</v-icon
      >
    </v-btn>
    <logout :dialog="dialog" v-on:cancel-dialog="cancelDialog" />
  </v-app-bar>
</template>

<script>
import logout from "@/components/Appbar/logout.vue";

export default {
  data() {
    return {
      dialog: false,
      loading: false
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
      let vm = this;
      vm.dialog = false;
    },
    openDrawer() {
      this.$store.commit("setDrawer", true);
    }
  },
  components: {
    logout
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    getLoading() {
      return this.$store.state.loading;
    }
  },
  mounted() {}
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

<style scoped>
.dialog.centered-dialog,
.v-dialog.centered-dialog {
  background: #282c2dad;
  box-shadow: none;
  border-radius: 6px;
  width: auto;
  color: whitesmoke;
}
</style>

<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-btn v-if="login == false" @click="Login()">Login on</v-btn>
        <div v-else>
          <p>{{ getUser.email }}</p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    Login() {
      let vm = this;
      vm.$store.dispatch("userSignIn");
    },
    testLogin() {
      let vm = this;
      vm.user = this.loginState;
      if (vm.user != null) {
        vm.logined = true;
      }
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    login() {
      return this.$store.state.login;
    }
  },
  mounted() {
    this.testLogin();
  }
};
</script>

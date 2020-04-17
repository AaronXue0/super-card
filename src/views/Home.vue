<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-btn v-if="!logined" @click="Login()">Login on</v-btn>
        <div v-else>
          <p>{{ user }}</p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import firebase from "firebase";
import { signin } from "@/api/signin.js";
export default {
  name: "Home",
  data() {
    return {
      logined: false,
      user: ""
    };
  },
  components: {},
  methods: {
    async Login() {
      let vm = this;
      let log = await signin();
      console.log(log.user.email);
      let email = log.user.email;
      if (email) {
        vm.logined = true;
        vm.user = email;
      }
    }
  }
};
</script>

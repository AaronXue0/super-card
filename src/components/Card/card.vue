<template>
  <v-card shaped elevatio="0" color="secondary" dark>
    <v-card-title>{{ cardInfo.id }}</v-card-title>
    <v-card-text class="white black--text">
      <br />
      <span>{{ cardInfo.data.content }}</span>
    </v-card-text>
    <v-card-actions class="priCard">
      <v-btn icon @click="clickLike" color="priCard">
        <v-icon v-if="!clicked" color="white">mdi-message</v-icon>
        <v-icon v-else color="primary">mdi-message-draw</v-icon>
      </v-btn>
      <span>{{ cardInfo.data.likes }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { writeCard } from "@/api/writeCard.js";
export default {
  name: "card",
  props: ["cardInfo"],
  data() {
    return {
      cardTitle: "Title",
      cardText: "Content",
      clicked: false
    };
  },
  components: {},
  methods: {
    clickLike() {
      let vm = this;
      vm.clicked = !vm.clicked;
      if (vm.clicked) writeCard(1, vm.cardInfo, this.$store.state.user);
      else writeCard(-1, vm.cardInfo, this.$store.state.user);
    },
    likedDetect() {
      let vm = this;
      let id = this.$store.state.user.uid;
      let obj = Object.keys(vm.cardInfo.data);
      obj.forEach(element => {
        if (element === id) {
          vm.clicked = true;
        }
      });
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
    this.likedDetect();
  }
};
</script>

<style></style>

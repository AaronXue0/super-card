<template>
  <v-card shaped elevatio color="secondary" dark>
    <v-card-title>{{ getCards[cardInfo].data.title }}</v-card-title>
    <v-card-text class="white black--text">
      <br />
      <span>{{ getCards[cardInfo].data.content }}</span>
      <hr />
      <small>Posy by - {{ getCards[cardInfo].data.postBy }}</small>
      <small class="small-float--right"
        >Date - {{ getCards[cardInfo].data.postDate }}</small
      >
    </v-card-text>
    <v-card-actions class="priCard">
      <v-btn icon @click="clickLike" color="priCard">
        <v-icon v-if="!clicked" color="white">{{ iconDefault }}</v-icon>
        <v-icon v-else color="error">{{ iconSupport }}</v-icon>
      </v-btn>
      <span>{{ getCards[cardInfo].data.likes }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { likeCard } from "@/api/likeCard.js";
export default {
  name: "card",
  props: ["cardInfo"],
  data() {
    return {
      iconDefault: "mdi-heart-outline",
      iconSupport: "mdi-heart",
      cardTitle: "Title",
      cardText: "Content",
      clicked: false
    };
  },
  components: {},
  methods: {
    clickLike() {
      let vm = this;
      if (vm.getUser) {
        vm.likedDetect();
        vm.clicked = !vm.clicked;
        if (vm.clicked)
          likeCard(1, vm.getCards[vm.cardInfo], this.$store.state.user);
        else likeCard(-1, vm.getCards[vm.cardInfo], this.$store.state.user);
      }
    },
    likedDetect() {
      let vm = this;
      let id = vm.$store.state.user.uid;
      let obj = Object.keys(vm.getCards[vm.cardInfo].data);
      vm.clicked = false;
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
    },
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {
    this.likedDetect();
  }
};
</script>

<style>
.small-float--right {
  position: relative;
  float: right;
}
</style>

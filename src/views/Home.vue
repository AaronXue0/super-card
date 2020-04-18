<template>
  <div class="home">
    <v-container class="caption-container">
      <v-card shaped elevatio="0" color="secondary" dark>
        <v-card-title>學權議題</v-card-title>
        <v-card-text>
          為自己的學權發聲。也聆聽他人的聲音
          <br />學權的路上，或許有人與你的立場不同，但我們可以選擇沈默與尊重。
          <br />而為論如何，如果你認同他的論點就給予他一隻筆吧！
        </v-card-text>
        <v-card-actions>
          <v-btn icon color="secondary" @click="switchIcon()">
            <v-icon color="white">{{ speechIcon1 }}</v-icon>
          </v-btn>
          <v-spacer />
          <v-icon color="white" class="lr-arrow">mdi-swap-vertical</v-icon>
          <v-spacer />
          <v-btn icon color="secondary" @click="switchIcon()">
            <v-icon color="white">{{ speechIcon2 }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container>
      <card />
    </v-container>
  </div>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "Home",
  data() {
    return {
      speechIcon1: "mdi-message",
      speechIcon2: "mdi-message-draw"
    };
  },
  components: {
    card
  },
  methods: {
    switchIcon() {
      let vm = this;
      let speechIcon = "";
      speechIcon = vm.speechIcon1;
      vm.speechIcon1 = vm.speechIcon2;
      vm.speechIcon2 = speechIcon;
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
  mounted() {}
};
</script>

<style>
.caption-container {
  position: relative;
  z-index: 5;
}
.lr-arrow {
  transform: rotate(-90deg);
}
</style>

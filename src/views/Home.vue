<template>
  <div class="home">
    <v-container>
      <v-row justify="center" class="pa-0 mg-0">
        <v-col cols="12" md="4">
          <v-card
            shaped
            elevatio="0"
            color="secondary"
            dark
            elevation="1"
            max-width="1000"
          >
            <v-card-title>學權超人</v-card-title>
            <v-card-text class="white black--text">
              <br />
              <span>
                為自己的學權發聲，也聆聽他人的聲音
                <hr />
                學權的路上，或許有人與你的立場不同
                <hr />
                但我們可以選擇沈默與尊重
                <hr />
                但如果你認同他的論點就給予他支持吧
              </span>
            </v-card-text>
            <v-card-actions class="priCard">
              <v-btn icon color="priCard" @click="switchIcon()">
                <v-icon color="white">{{ speechIcon1 }}</v-icon>
              </v-btn>
              <v-spacer />
              <v-icon color="white" class="lr-arrow">mdi-swap-vertical</v-icon>
              <v-spacer />
              <v-btn icon color="priCard" @click="switchIcon()">
                <v-icon color="white">{{ speechIcon2 }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" v-for="(item, index) in getCards" :key="index">
          <card :cardInfo="item" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center"> </v-row>
    </v-container>
  </div>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "Home",
  data() {
    return {
      speechIcon1: "mdi-heart",
      speechIcon2: "mdi-heart-outline"
    };
  },
  components: {
    card
  },
  methods: {
    setDefaultCards() {
      this.$store.dispatch("setCardsAction");
    },
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
    },
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {
    this.setDefaultCards();
  }
};
</script>

<style>
.lr-arrow {
  transform: rotate(-90deg);
}
</style>

<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <div class="pa-0 ma-0" v-for="(item, index) in getCards" :key="index">
          <v-col cols="12" md="" v-if="item.data.isArchived">
            <card :cardInfo="index" :cardType="0" />
          </v-col>
        </div>
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
  name: "process",
  data() {
    return {};
  },
  components: {
    card
  },
  methods: {
    setDefaultCards() {
      this.$store.dispatch("setCardsAction");
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

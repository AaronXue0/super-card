<template>
  <div class="home">
    <v-container>
      <v-row justify="center" v-for="(item, index) in getCards" :key="index">
        <v-col
          cols="12"
          md="6"
          v-if="
            getUser.email == item.data.postBy && item.data.isDeleted == false
          "
        >
          <card :cardInfo="index" :cardType="1" />
        </v-col>
      </v-row>
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
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {
    this.setDefaultCards();
  }
};
</script>

<style></style>

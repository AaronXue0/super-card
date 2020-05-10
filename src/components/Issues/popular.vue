<template>
  <v-container class="popular">
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(item, index) in sortedCards.filter(
          item =>
            item.data.likes >= 10 &&
            item.data.isDeleted == false &&
            item.data.isArchived == false
        )"
        :key="index"
        class="div-parent"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "popular",
  props: ["cards"],
  data() {
    return {
      sortedCards: []
    };
  },
  components: {
    card
  },
  methods: {
    async doSort() {
      let vm = this;
      vm.sortedCards = vm.cards.sort((a, b) => b.data.likes - a.data.likes);
    }
  },
  computed: {
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {
    this.doSort();
  }
};
</script>

<style></style>

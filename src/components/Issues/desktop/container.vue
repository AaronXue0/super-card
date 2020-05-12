<template>
  <v-container class="procdiscussess" style="position:relative;left:-13%">
    <v-row v-if="cards && type == 0" justify="center">
      <v-col
        cols="10"
        md="8"
        lg="7"
        v-for="(item, index) in cards.filter(
          item =>
            item.data.isDeleted == false &&
            item.data.isArchived == false &&
            item.data.isProcessing == false
        )"
        :key="index"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
    <v-row v-if="cards && type == 1" justify="center">
      <v-col
        cols="10"
        md="8"
        lg="7"
        v-for="(item, index) in cards.filter(
          item =>
            item.data.isDeleted == false &&
            item.data.isArchived == false &&
            item.data.isProcessing == true
        )"
        :key="index"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
    <v-row v-if="cards && type == 2" justify="center">
      <v-col
        cols="10"
        md="8"
        lg="7"
        v-for="(item, index) in cards.filter(
          item =>
            item.data.likes >= 10 &&
            item.data.isDeleted == false &&
            item.data.isArchived == false
        )"
        :key="index"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
    <v-row v-if="cards && type == 3" justify="center">
      <v-col
        cols="10"
        md="8"
        lg="7"
        v-for="(item, index) in cards.filter(
          item => item.data.isArchived && item.data.isDeleted == false
        )"
        :key="index"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
    <v-row v-if="cards && type == 4" justify="center">
      <v-col
        cols="10"
        md="8"
        lg="7"
        justify="center"
        v-for="(item, index) in cards.filter(
          item =>
            getUser.email == item.data.postBy && item.data.isDeleted == false
        )"
        :key="index"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/Card/largeCard.vue";
export default {
  name: "container",
  props: ["cards", "type"],
  data() {
    return {};
  },
  components: {
    card
  },
  methods: {},
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {}
};
</script>

<style></style>

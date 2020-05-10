<template>
  <v-container v-if="cards" class="possess">
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(item, index) in cards.filter(
          item =>
            getUser.email == item.data.postBy && item.data.isDeleted == false
        )"
        :key="index"
      >
        <card :card="item" :cardType="1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "possess",
  props: ["cards"],
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
    }
  },
  mounted() {}
};
</script>

<style></style>

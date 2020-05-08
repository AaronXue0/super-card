<template>
  <v-container v-if="cards" class="finished">
    <v-row justify="center" v-for="(item, index) in cards" :key="index">
      <v-col
        cols="12"
        md="6"
        v-if="item.data.isArchived && item.data.isDeleted == false"
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "finished",
  props: ["cards"],
  data() {
    return {};
  },
  components: {
    card
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style></style>

<template>
  <v-container class="process">
    <v-row justify="center" v-for="(item, index) in cards" :key="index">
      <v-col
        cols="12"
        md="6"
        v-if="
          item.data.isDeleted == false &&
            item.data.isArchived == false &&
            item.data.isProcessing == true
        "
      >
        <card :card="item" :cardType="0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "process",
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

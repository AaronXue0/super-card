<template>
  <v-container class="procdiscussess">
    <v-row v-if="cards">
      <v-col
        cols="12"
        md="6"
        lg="4"
        justify="center"
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
  </v-container>
</template>

<script>
import card from "@/components/Card/card.vue";
export default {
  name: "discuss",
  props: ["cards"],
  data() {
    return {
      value: [
        "學校設備",
        "資訊軟體",
        "經費問題",
        "場地環境",
        "課程授課",
        "國際競賽",
        "交換學生",
        "其他類型"
      ],
      select: [
        "學校設備",
        "資訊軟體",
        "經費問題",
        "場地環境",
        "課程授課",
        "國際競賽",
        "交換學生",
        "其他類型"
      ]
    };
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

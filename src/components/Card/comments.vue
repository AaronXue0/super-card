<template>
  <v-list-group no-action v-if="comments">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title
          >問題回覆 ( {{ getCommentsLength }} )</v-list-item-title
        >
      </v-list-item-content>
    </template>
    <v-list-item v-for="(item, index) in comments" :key="index" class="pa-0">
      <v-list-item-content class="pa-0">
        <p class="p-comment-title">{{ item.reply }}</p>
        <p class="p-comment-postBy">{{ item.postBy }}</p>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: "comments",
  props: ["comments"],
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {
    getCards() {
      return this.$store.state.cards;
    },
    getCommentsLength() {
      return this.comments.length;
    }
  },
  mounted() {}
};
</script>

<style>
.email-field {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
.p-comment-title {
  position: relative;
  top: 15px;
  left: 5%;
  padding: 10px 50px 10px 10px;
}
.p-comment-postBy {
  font-size: 13px;
  position: relative;
  left: 5%;
  padding: 10px 50px 10px 10px;
  top: -3px;
  margin-bottom: -15px;
}
</style>

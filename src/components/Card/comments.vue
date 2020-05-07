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
        <!-- <v-textarea
          single-line
          disabled
          rounded
          auto-grow
          row-height="0"
          color="primary"
          :value="item.reply"
        >
        </v-textarea>
        <v-text-field
          disabled
          rounded
          :value="item.postBy"
          auto-grow
          row-height="1"
          class="email-field"
        >
        </v-text-field> -->
        <p class="p-comment-title">{{ item.reply }}</p>
        <p class="p-comment-postBy">{{ item.postBy }}</p>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: "card",
  props: ["cardInfo"],
  data() {
    return {
      comments: null
    };
  },
  components: {},
  methods: {
    setComments() {
      let vm = this;
      vm.comments = vm.getCards[vm.cardInfo].comment;
    }
  },
  computed: {
    getCards() {
      return this.$store.state.cards;
    },
    getCommentsLength() {
      return this.comments.length;
    }
  },
  mounted() {
    this.setComments();
  }
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

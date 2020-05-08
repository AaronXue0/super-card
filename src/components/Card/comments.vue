<template>
  <v-list-group no-action>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title
          >問題回覆 ( {{ getCommentsLength }} )</v-list-item-title
        >
      </v-list-item-content>
    </template>
    <v-list-item v-if="getAuthority">
      <v-text-field
        label="回覆"
        v-model="reply"
        single-line
        messages
        class="pa-0 comment-message"
      ></v-text-field>
      <v-btn icon fab class="comment-message" @click="doReply">
        <v-icon>
          mdi-send
        </v-icon>
      </v-btn>
    </v-list-item>
    <v-list-item
      v-for="(item, index) in card.comments"
      :key="index"
      class="pa-0"
    >
      <v-list-item-content class="pa-0 list-comment">
        <p class="p-comment-title">{{ item.reply }}</p>
        <p class="p-comment-postBy">{{ item.postBy }}</p>
        <v-btn icon fab class="btn-delete-comment" @click="doReply">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
import { postComment } from "@/api/Card/postComment.js";
export default {
  name: "comments",
  props: ["card"],
  data() {
    return {
      reply: ""
    };
  },
  components: {},
  methods: {
    doReply() {
      let vm = this;
      if (vm.reply != "") {
        postComment(vm.getUser, vm.card, vm.reply);
        vm.updateCard();
      }
      vm.reply = "";
    },
    updateCard() {
      let vm = this;
      vm.card.comments.push({ reply: vm.reply, postBy: vm.getUser.email });
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    getCards() {
      return this.$store.state.cards;
    },
    getCommentsLength() {
      return this.card.comments.length;
    },
    getAuthority() {
      return this.$store.state.isAdmin;
    }
  },
  mounted() {}
};
</script>

<style>
.list-comment {
  position: relative;
  top: -10px;
  margin-bottom: -50px;
}
.comment-message {
  position: relative;
  left: -50px;
}
.btn-delete-comment {
  position: relative;
  left: 50px;
  top: -60px;
  float: right;
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

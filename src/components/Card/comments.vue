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
      v-for="(item, index) in card.comments.filter(
        i => i.data.isDeleted == false
      )"
      :key="index"
      class="pa-0"
    >
      <v-list-item-content class="pa-0 list-comment">
        <p class="p-comment-title">{{ item.data.reply }}</p>
        <p class="p-comment-postBy">{{ item.data.postBy }}</p>
      </v-list-item-content>
      <v-btn
        icon
        fab
        class="btn-delete-comment"
        @click="deleteComment(item, index)"
        v-if="getAuthority"
      >
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-list-item>
  </v-list-group>
</template>

<script>
import { postComment, deleteComment } from "@/api/Card/postComment.js";
export default {
  name: "comments",
  props: ["card"],
  data() {
    return {
      reply: "",
      replyLen: 0
    };
  },
  components: {},
  methods: {
    doReply() {
      let vm = this;
      if (vm.reply != "") {
        let id = vm.getUser.uid + new Date();
        postComment(vm.getUser, vm.card, vm.reply, id);
        vm.updateCard(id);
      }
      vm.reply = "";
    },
    deleteComment(item, index) {
      let vm = this;
      deleteComment(vm.card, item);
      vm.card.comments.splice(index, 1);
      vm.replyLen--;
    },
    updateCard(id) {
      let vm = this;
      vm.card.comments.unshift({
        data: {
          reply: vm.reply,
          postBy: vm.getUser.email,
          isDeleted: false
        },
        id: id
      });
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
      let vm = this;
      if (vm.replyLen > 0) return vm.replyLen;
      vm.replyLen = vm.card.comments.length;
      vm.card.comments.forEach(element => {
        if (element.data.isDeleted) vm.replyLen--;
      });
      if (vm.replyLen == null) vm.replyLen = 0;
      return vm.replyLen;
      // return this.card.comments.length;
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
  margin-bottom: -10px;
}
.comment-message {
  position: relative;
  left: -50px;
}
.btn-delete-comment {
  position: relative;
  left: -70px;
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

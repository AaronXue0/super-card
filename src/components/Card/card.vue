<template>
  <div>
    <v-card shaped elevation color="secondary" dark>
      <v-card-title>{{ getCards[cardInfo].data.title }}</v-card-title>
      <v-card-text class="white black--text">
        <br />
        <span>{{ getCards[cardInfo].data.content }}</span>
        <hr />
        <small>Post by - {{ getCards[cardInfo].data.postBy }}</small>
        <small class="small-float--right"
          >Date - {{ getCards[cardInfo].data.postDate }}
        </small>
      </v-card-text>
      <v-card-actions class="priCard">
        <v-btn icon @click="clickLike" color="priCard">
          <v-icon v-if="!clicked" color="white">{{ iconDefault }}</v-icon>
          <v-icon v-else color="error">{{ iconSupport }}</v-icon>
        </v-btn>
        <span>{{ getCards[cardInfo].data.likes }}</span>
        <v-spacer></v-spacer>
        <!-- delete feature -->
        <v-btn
          icon
          color="priCard"
          v-if="isOwer || getAuthority"
          @click="deleteSelf = true"
        >
          <v-icon color="white">mdi-trash-can</v-icon>
        </v-btn>
        <deleteDialog
          :deleteSelf="deleteSelf"
          :cardInfo="cardInfo"
          v-on:cancel-dialog="cancelDialog"
        />
        <!-- archive feature -->
        <v-btn icon color="priCard" v-if="getAuthority">
          <v-icon color="white">mdi-archive</v-icon>
        </v-btn>
      </v-card-actions>
      <commentView :cardInfo="cardInfo" />
    </v-card>
  </div>
</template>

<script>
import { likeCard } from "@/api/Card/likeCard.js";
import commentView from "@/components/Card/comments.vue";
import deleteDialog from "@/components/Card/deleteCard.vue";
export default {
  name: "card",
  props: ["cardInfo"],
  data() {
    return {
      iconDefault: "mdi-heart-outline",
      iconSupport: "mdi-heart",
      cardTitle: "Title",
      cardText: "Content",
      clicked: false,
      comments: null,
      deleteSelf: false
    };
  },
  components: { commentView, deleteDialog },
  methods: {
    clickLike() {
      let vm = this;
      if (vm.getUser) {
        vm.likedDetect();
        vm.clicked = !vm.clicked;
        if (vm.clicked)
          likeCard(1, vm.getCards[vm.cardInfo], this.$store.state.user);
        else likeCard(-1, vm.getCards[vm.cardInfo], this.$store.state.user);
      }
    },
    likedDetect() {
      let vm = this;
      let id = vm.$store.state.user.uid;
      let obj = Object.keys(vm.getCards[vm.cardInfo].data);
      vm.clicked = false;
      obj.forEach(element => {
        if (element === id) {
          vm.clicked = true;
        }
      });
    },
    setDefault() {
      let vm = this;
      vm.comments = vm.getCards[vm.cardInfo].comment;
    },
    cancelDialog() {
      this.deleteSelf = false;
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    login() {
      return this.$store.state.login;
    },
    getCards() {
      return this.$store.state.cards;
    },
    getAuthority() {
      return this.$store.state.isAdmin;
    },
    isOwer() {
      return this.getUser.email == this.getCards[this.cardInfo].data.postBy;
    }
  },
  mounted() {
    this.likedDetect();
    this.setDefault();
  }
};
</script>

<style></style>

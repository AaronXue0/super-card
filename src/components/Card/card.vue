<template>
  <div>
    <v-card shaped elevation color="cardHeader" dark min-width="350px">
      <v-card-title>{{ card.data.title }}</v-card-title>
      <v-card-text class="white black--text">
        <br />
        <span class="span-card-tag">#{{ card.data.issueType }}</span>
        <hr />
        <span>{{ card.data.content }}</span>
        <hr />
        <small>Post by - {{ card.data.postBy }}</small>
        <small class="small-float--right"
          >Date - {{ card.data.postDate }}
        </small>
      </v-card-text>
      <v-card-actions class="cardContent">
        <v-btn icon @click="clickLike" color="priCard">
          <v-icon v-if="!getLiked" color="white">{{ iconDefault }}</v-icon>
          <v-icon v-else color="primary">{{ iconSupport }}</v-icon>
        </v-btn>
        <span>{{ card.data.likes }}</span>
        <v-spacer></v-spacer>
        <!-- process feature -->
        <v-btn
          icon
          color="priCard"
          v-if="getAuthority && cardType == 0"
          @click="processSelf = true"
        >
          <v-icon color="white">mdi-sword</v-icon>
        </v-btn>
        <processDialog
          :processSelf="processSelf"
          :card="card"
          v-on:cancel-dialog="cancelDialog"
        />
        <!-- delete feature -->
        <v-btn
          icon
          color="priCard"
          v-if="getAuthority && cardType != 2"
          @click="deleteSelf = true"
        >
          <v-icon color="white">mdi-trash-can</v-icon>
        </v-btn>
        <deleteDialog
          :deleteSelf="deleteSelf"
          :card="card"
          v-on:cancel-dialog="cancelDialog"
        />
        <!-- archive feature -->
        <v-btn
          icon
          color="priCard"
          v-if="getAuthority && cardType == 0"
          @click="archiveSelf = true"
        >
          <v-icon color="white">mdi-archive</v-icon>
        </v-btn>
        <archiveDialog
          :archiveSelf="archiveSelf"
          :card="card"
          v-on:cancel-dialog="cancelDialog"
        />
      </v-card-actions>
      <commentView :comments="card.comments" class="cardFooter" />
    </v-card>
  </div>
</template>

<script>
import { likeCard } from "@/api/Card/likeCard.js";
import commentView from "@/components/Card/comments.vue";
import deleteDialog from "@/components/Card/deleteCard.vue";
import archiveDialog from "@/components/Card/archiveCard.vue";
import processDialog from "@/components/Card/processCard.vue";
export default {
  name: "card",
  props: ["card", "cardType"],
  data() {
    return {
      iconDefault: "mdi-heart-outline",
      iconSupport: "mdi-heart",
      cardTitle: "Title",
      cardText: "Content",
      clicked: false,
      deleteSelf: false,
      archiveSelf: false,
      processSelf: false
    };
  },
  components: { commentView, deleteDialog, archiveDialog, processDialog },
  methods: {
    async clickLike() {
      let vm = this;
      if (vm.getUser) {
        vm.likedDetect();
        vm.clicked = !vm.clicked;
        if (vm.clicked)
          vm.card.data.likes = await likeCard(
            1,
            vm.card,
            this.$store.state.user
          );
        else
          vm.card.data.likes = await likeCard(
            -1,
            vm.card,
            this.$store.state.user
          );
      }
    },
    likedDetect() {
      let vm = this;
      let id = vm.$store.state.user.uid;
      let obj = Object.keys(vm.card.data);
      vm.clicked = false;
      obj.forEach(element => {
        if (element === id) {
          vm.clicked = true;
        }
      });
    },
    cancelDialog() {
      let vm = this;
      vm.deleteSelf = false;
      vm.archiveSelf = false;
      vm.processSelf = false;
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    getCards() {
      return this.$store.state.cards;
    },
    getAuthority() {
      return this.$store.state.isAdmin;
    },
    isOwer() {
      return this.getUser.email == this.cardInfo.data.postBy;
    },
    getLiked() {
      return this.card.data.likes;
    }
  },
  mounted() {
    this.likedDetect();
  }
};
</script>

<style>
.small-float--right {
  position: relative;
  float: right;
}
.span-card-tag {
  border: 0px hidden black;
  background-color: #ef9a9a;
  color: rgb(255, 255, 255);
  margin: auto;
  padding: 1px;
  text-align: center;
}
</style>

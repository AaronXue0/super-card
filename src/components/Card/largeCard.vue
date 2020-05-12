<template>
  <div>
    <v-card elevation="1" tile>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card
            color="cardHeader"
            elevation="0"
            height="34%"
            width="20"
            tile
            style="postition:relative;top:-12px"
          ></v-card>
          <v-card
            color="white"
            elevation="1"
            tile
            height="36%"
            width="20"
          ></v-card>
          <v-card
            color="primary"
            elevation="0"
            height="35%"
            width="20"
            tile
          ></v-card>
        </v-col>
        <v-col cols="8">
          <v-card-title style="position:relative;left:-4%">{{
            card.data.title
          }}</v-card-title>

          <br />
          <v-card height="70" elevation="0">
            <span>{{ card.data.content }}</span>
          </v-card>
          <br />
          <small>Post by - {{ card.data.postBy }}</small>
          <small class="small-float--right pa-0"
            >Date - {{ card.data.postDate }}
          </small>
          <hr />
          <v-btn color="primary" elevation="0" tile class="span-card-tag"
            >#{{ card.data.issueType }}</v-btn
          >
          <v-btn text class="small-float--right">留言數 (0)</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-row
            class="flex-column ma-0"
            justify="center"
            style="position:relative;top:50px"
          >
            <v-col class="px-0">
              <!-- Process feature -->
              <v-btn
                icon
                color="white"
                v-if="getAuthority && cardType == 0"
                @click="processSelf = true"
              >
                <v-icon color="cardContent">mdi-sword</v-icon>
              </v-btn>
              <processDialog
                :processSelf="processSelf"
                :card="card"
                v-on:cancel-dialog="cancelDialog"
              />
            </v-col>
            <v-col class="px-0">
              <!-- Like feature -->
              <v-btn icon @click="clickLike" color="white">
                <v-icon v-if="!clicked" color="primary">{{
                  iconDefault
                }}</v-icon>
                <v-icon v-else color="primary">{{ iconSupport }}</v-icon>
              </v-btn>
              <span>{{ card.data.likes }}</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto" style="position:relative;left:-2%">
          <v-row
            class="flex-column ma-0"
            justify="center"
            style="position:relative;top:50px"
          >
            <v-col class="px-0">
              <!-- Delete feature -->
              <v-btn
                icon
                color="white"
                v-if="getAuthority && cardType != 2"
                @click="deleteSelf = true"
              >
                <v-icon color="primary">mdi-trash-can</v-icon>
              </v-btn>
              <deleteDialog
                :deleteSelf="deleteSelf"
                :card="card"
                v-on:cancel-dialog="cancelDialog"
              />
            </v-col>
            <v-col class="px-0">
              <!-- Archive feature -->
              <v-btn
                icon
                color="white"
                v-if="getAuthority && cardType == 0"
                @click="archiveSelf = true"
              >
                <v-icon color="cardContent">mdi-archive</v-icon>
                <archiveDialog
                  :archiveSelf="archiveSelf"
                  :card="card"
                  v-on:cancel-dialog="cancelDialog"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { likeCard } from "@/api/Card/likeCard.js";
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
  components: {
    deleteDialog,
    archiveDialog,
    processDialog
  },
  methods: {
    async clickLike() {
      let vm = this;
      if (vm.getUser) {
        vm.likedDetect();
        vm.clicked = !vm.clicked;
        if (vm.clicked) {
          likeCard(1, vm.card, this.$store.state.user);
          vm.card.data.likes++;
        } else {
          likeCard(-1, vm.card, this.$store.state.user);
          vm.card.data.likes--;
        }
      }
    },
    likedDetect() {
      let vm = this;
      let id = vm.$store.state.user.uid;
      vm.clicked = false;
      if (vm.card.data[id]) vm.clicked = true;
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
    }
  },
  mounted() {
    this.likedDetect();
  }
};
</script>

<style></style>

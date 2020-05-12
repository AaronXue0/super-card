<template>
  <v-app class="home">
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <v-card color="white" tile elevation="0">
          <v-card-title style="font-size:40px">學權超人筆記本</v-card-title>
          <v-card-text class="white black--text">
            <br />
            <span style="color:#616161">
              # 發文規則同北科全體版
              <br />
              1. 使用北科信箱登入
              <br />
              2.
              提出自己遇到且希望能得到改善的問題描述，不妨提出解決的方法讓學校知道。
              <br />
              3.
              喜歡或是你也有困擾的問題可以點個愛心，越多關注就能讓學校越快處理
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <desktop class="hidden-xs-only" />
    <mobile class="hidden-sm-and-up" />
  </v-app>
</template>

<script>
import desktop from "@/components/Issues/desktop/index.vue";
import mobile from "@/components/Issues/mobile.vue";

export default {
  name: "Home",
  data() {
    return {
      tab: null,
      speechIcon1: "mdi-heart",
      speechIcon2: "mdi-heart-outline"
    };
  },
  components: {
    desktop,
    mobile
  },
  methods: {
    setDefaultCards() {
      let vm = this;
      vm.$store.dispatch("setCardsAction");
      vm.cards = this.$store.state.cards;
    }
  },
  computed: {},
  mounted() {
    this.setDefaultCards();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.home {
  font-family: "Noto Sans", sans-serif, "微軟雅黑";
}
</style>

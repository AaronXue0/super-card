<template>
  <v-app class="home">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card color="primary" dark tile elevation="0" max-width="1000">
          <v-card-title>學權超人筆記本</v-card-title>
          <v-card-text class="white black--text">
            <br />
            <span>
              # 發文規則同北科全體版
              <hr />
              1. 使用北科信箱登入
              <hr />
              2.
              提出自己遇到且希望能得到改善的問題描述，不妨提出解決的方法讓學校知道。
              <hr />
              3.
              喜歡或是你也有困擾的問題可以點個愛心，越多關注就能讓學校越快處理
            </span>
          </v-card-text>
          <v-card color="primary" dark elevation="0" height="3"></v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-tabs background-color="white" v-model="tab" show-arrows>
      <v-tab href="#tab-1">
        討論版
      </v-tab>
      <v-tab href="#tab-2">
        處理中
      </v-tab>
      <v-tab href="#tab-3">
        熱門議題
      </v-tab>
      <v-tab href="#tab-4">
        處理完畢
      </v-tab>
      <v-tab href="#tab-5" v-if="login">
        我的文章
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <!-- Dicuss -->
          <discuss :cards="getCards" />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <!-- Processing -->
          <process :cards="getCards" />
        </v-tab-item>
        <v-tab-item value="tab-3">
          <!-- Popular -->
          <popular :cards="getCards" />
        </v-tab-item>
        <v-tab-item value="tab-4">
          <!-- finished -->
          <finish :cards="getCards" />
        </v-tab-item>
        <v-tab-item value="tab-5">
          <!-- Possess -->
          <possess :cards="getCards" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-app>
</template>

<script>
import discuss from "@/components/Issues/discuss.vue";
import process from "@/components/Issues/process.vue";
import popular from "@/components/Issues/popular.vue";
import finish from "@/components/Issues/finished.vue";
import possess from "@/components/Issues/possess.vue";
export default {
  name: "Home",
  data() {
    return {
      cards: null,
      tab: null,
      speechIcon1: "mdi-heart",
      speechIcon2: "mdi-heart-outline"
    };
  },
  components: {
    discuss,
    process,
    popular,
    finish,
    possess
  },
  methods: {},
  computed: {
    login() {
      return this.$store.state.login;
    },
    getCards() {
      return this.$store.state.cards;
    }
  },
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.home {
  font-family: "Noto Sans", sans-serif;
}
.lr-arrow {
  transform: rotate(90deg);
}
</style>

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
    <v-tabs background-color="white" v-model="tab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        熱門事件
      </v-tab>
      <v-tab href="#tab-2">
        討論版
      </v-tab>
      <v-tab href="#tab-3">
        處理完畢
      </v-tab>
      <v-tab href="#tab-4" v-if="login">
        我的文章
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <popular />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <process />
        </v-tab-item>
        <v-tab-item value="tab-3">
          <finish />
        </v-tab-item>
        <v-tab-item value="tab-4">
          <possess />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-app>
</template>

<script>
import popular from "@/components/Issues/popular.vue";
import process from "@/components/Issues/process.vue";
import finish from "@/components/Issues/finished.vue";
import possess from "@/components/Issues/possess.vue";
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
    popular,
    process,
    finish,
    possess
  },
  methods: {
    switchIcon() {
      let vm = this;
      let speechIcon = "";
      speechIcon = vm.speechIcon1;
      vm.speechIcon1 = vm.speechIcon2;
      vm.speechIcon2 = speechIcon;
    }
  },
  computed: {
    login() {
      return this.$store.state.login;
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

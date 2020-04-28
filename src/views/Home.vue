<template>
  <div class="home">
    <v-col cols="12" md="4">
      <v-card shaped color="secondary" dark elevation="0" max-width="1000">
        <v-card-title>學權超人筆記本</v-card-title>
        <v-card-text class="white black--text">
          <br />
          <span>
            為自己的學權發聲，也聆聽他人的聲音
            <hr />
            學權的路上，或許有人與你的立場不同
            <hr />
            但我們可以選擇沈默與尊重
            <hr />
            但如果你認同他的論點就給予他支持吧
          </span>
        </v-card-text>
        <v-card-actions class="priCard">
          <v-btn icon color="priCard" @click="switchIcon()">
            <v-icon color="white">{{ speechIcon1 }}</v-icon>
          </v-btn>
          <v-spacer />
          <v-icon color="white" class="lr-arrow">mdi-swap-vertical</v-icon>
          <v-spacer />
          <v-btn icon color="priCard" @click="switchIcon()">
            <v-icon color="white">{{ speechIcon2 }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-tabs background-color="white" v-model="tab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        討論版
      </v-tab>
      <v-tab href="#tab-2">
        處理完畢
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <process />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <finish />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import process from "@/components/Issues/process.vue";
import finish from "@/components/Issues/finished.vue";
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
    process,
    finish
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
  computed: {},
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.home {
  font-family: "Noto Sans", sans-serif;
}
</style>

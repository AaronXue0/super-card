<template>
  <v-app class="home">
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
        我的收藏
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

<template>
  <v-app class="pad">
    <v-row justify="center" style="position:relative;left:10%" v-if="getCards">
      <v-col cols="auto">
        <v-tabs background-color="white" v-model="tab">
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
              <container :cards="getCards" :type="0" />
            </v-tab-item>
            <v-tab-item value="tab-2"
              ><container :cards="getCards" :type="1"
            /></v-tab-item>
            <v-tab-item value="tab-3"
              ><container :cards="getCards" :type="2"
            /></v-tab-item>
            <v-tab-item value="tab-4">
              <container :cards="getCards" :type="3"
            /></v-tab-item>
            <v-tab-item value="tab-5"
              ><container :cards="getCards" :type="4" />
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import container from "@/components/Issues/desktop/container.vue";
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
  components: { container },
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

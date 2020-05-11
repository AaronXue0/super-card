<template>
  <v-app class="home">
    <mobile class="hidden-md-and-up" />
    <desktop class="hidden-sm-and-down" />
  </v-app>
</template>

<script>
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

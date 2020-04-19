import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import zhHant from "vuetify/es5/locale/zh-Hant";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#82B1FF",
        secondary: "#263238",
        priCard: "#1565c0",
        secCard: "#ff6f60",
        accent: "#ffca28",
        error: "#e53935",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#000000"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zh-Hant"
  }
});

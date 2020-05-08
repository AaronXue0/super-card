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
        primary: "#ef9a9a",
        secondary: "#263238",
        priCard: "#D7DCDE",
        secCard: "#3E516E",
        thrCard: "#3E516E",
        forCard: "#8891A1",
        cardHeader: "#1976d2",
        cardFooter: "#ef9a99",
        cardContent: "#64b5f6"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zh-Hant"
  }
});

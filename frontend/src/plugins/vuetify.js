import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css' 
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // default - only for display purposes
    },
    theme: {
        themes: {
          light: {
            primary: "#ACD2ED", //blue#acd2ed
            blue: "#9AD1D4",
            extra: "#61aadd",
            light: "#EEEEFF",
            bluey: "#3591d3",
            dar: "#61a9dde0",
            carrot: "#e67e22",
            gre: "#f1f2f6",
            asfalt: "#34495e",
            midnight: "#2c3e50",
            cloud: "#ecf0f1",
          },
        },
      },
});

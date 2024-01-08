import Vue from 'vue';
import Vuex from 'vuex';
import calendarNav from './modules/calendarNav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    calendarNav,
  },
});

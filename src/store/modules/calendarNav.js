import moment from 'moment';
import { SYSTEM_FORMAT } from '@/constants/date.constants';

const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';

const generateWeekArray = (date) => Array.from(
  { length: 7 },
  (_, i) => moment(date).add(i, 'days').format(SYSTEM_FORMAT),
);

const state = {
  today: moment().format(SYSTEM_FORMAT),
  startOfCurrentWeek: moment().startOf('week').format(SYSTEM_FORMAT),
  currentWeek: '',
  week: Array.from({ length: 7 }, () => ''),
};

const getters = {};

const mutations = {
  [SET_CURRENT_WEEK]: (state, date) => {
    state.week = generateWeekArray(date);
    state.currentWeek = date;
  },
};

const actions = {
  setCurrentWeek({ commit }, date) {
    commit(SET_CURRENT_WEEK, date);
  },
  // switch to prev week
  prevWeek({ state, dispatch }) {
    const prevWeekStart = moment(state.currentWeek, SYSTEM_FORMAT)
      .subtract(1, 'week')
      .startOf('week')
      .format(SYSTEM_FORMAT);
    dispatch('setCurrentWeek', prevWeekStart);
  },
  // switch to next week
  nextWeek({ state, dispatch }) {
    const nextWeekStart = moment(state.currentWeek, SYSTEM_FORMAT)
      .add(1, 'week')
      .startOf('week')
      .format(SYSTEM_FORMAT);
    dispatch('setCurrentWeek', nextWeekStart);
  },
  // switch to present week
  presentWeek({ state, dispatch }) {
    dispatch('setCurrentWeek', state.startOfCurrentWeek);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

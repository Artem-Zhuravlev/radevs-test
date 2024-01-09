import moment from 'moment';
import { SYSTEM_FORMAT } from '@/constants/date.constants';

/**
 * Mutation type to set the current week.
 * @type {string}
*/
const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';

/**
 * Generates an array representing a week starting from the given date.
 * @param {string} date - The starting date for the week.
 * @returns {string[]} An array of formatted dates representing the week.
*/
const generateWeekArray = (date) => Array.from(
  { length: 7 },
  (_, i) => moment(date).add(i, 'days').format(SYSTEM_FORMAT),
);

/**
 * Vuex module representing date-related state and actions.
 * @typedef {Object} DateModule
 * @property {string} today - The formatted current date.
 * @property {string} startOfCurrentWeek - The formatted start date of the current week.
 * @property {string} currentWeek - The formatted date representing the current week.
 * @property {string[]} week - An array of formatted dates representing the current week.
 */

/**
 * Date-related state for the Vuex module.
 * @type {DateModule}
 */
const state = {
  today: moment().format(SYSTEM_FORMAT),
  startOfCurrentWeek: moment().startOf('week').format(SYSTEM_FORMAT),
  currentWeek: '',
  week: Array.from({ length: 7 }, () => ''),
};

const getters = {};

const mutations = {
  /**
   * Sets the current week and generates the week array based on the given date.
   * @param {DateModule} state - The current state of the module.
   * @param {string} date - The date representing the start of the current week.
   */
  [SET_CURRENT_WEEK]: (state, date) => {
    state.week = generateWeekArray(date);
    state.currentWeek = date;
  },
};

const actions = {
  /**
   * Sets the current week in the module state.
   * @param {Function} commit - Vuex commit function.
   * @param {string} date - The date representing the start of the current week.
   */
  setCurrentWeek({ commit }, date) {
    commit(SET_CURRENT_WEEK, date);
  },

  /**
   * Switches to the previous week in the module state.
   * @param {Object} context - Vuex action context.
   */
  prevWeek({ state, dispatch }) {
    const prevWeekStart = moment(state.currentWeek, SYSTEM_FORMAT)
      .subtract(1, 'week')
      .startOf('week')
      .format(SYSTEM_FORMAT);
    dispatch('setCurrentWeek', prevWeekStart);
  },

  /**
   * Switches to the next week in the module state.
   * @param {Object} context - Vuex action context.
   */
  nextWeek({ state, dispatch }) {
    const nextWeekStart = moment(state.currentWeek, SYSTEM_FORMAT)
      .add(1, 'week')
      .startOf('week')
      .format(SYSTEM_FORMAT);
    dispatch('setCurrentWeek', nextWeekStart);
  },

  /**
   * Switches to the present week in the module state.
   * @param {Object} context - Vuex action context.
   */
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

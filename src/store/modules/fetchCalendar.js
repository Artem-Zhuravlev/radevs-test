import { getBookingList } from '@/http';

const state = {
  /**
   * The list of bookings, or null if not yet fetched.
   * @type {Object[]|null}
   */
  bookingList: null,
};

const actions = {
  /**
   * Fetches the booking list if not already available.
   * @param {Object} context - Vuex action context.
   * @returns {Promise<Object[]|null>} The fetched booking list.
   */
  async fetch({ state }) {
    if (!state.bookingList) {
      state.bookingList = await getBookingList();
    }

    return state.bookingList;
  },
};

export default {
  namespaced: true,
  state,
  actions,
};

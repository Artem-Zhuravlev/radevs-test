import { getBookingList } from '@/http';

const state = {
  bookingList: null,
};

const actions = {
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

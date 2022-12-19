import { createReducer } from '@reduxjs/toolkit';

const initalState = {
  data: [],
  isLoading: false,
  isError: false,
};

const dataReducer = createReducer(initalState, {
  dataRequest: (state) => {
    state.loading = true;
  },
  dataSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  dataFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const pageNumberReducer = createReducer(initalState, {
  pageRequest: (state) => {
    state.loading = true;
  },
  pageSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  pageFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const filterReducer = createReducer(
  { data: 'All' },
  {
    filterRequest: (state) => {
      state.loading = true;
    },
    filterSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    filterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export default dataReducer;

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

export const paginationDataReducer = createReducer(initalState, {
  paginationDataRequest: (state) => {
    state.loading = true;
  },
  paginationDataSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  paginationDataFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export default dataReducer;

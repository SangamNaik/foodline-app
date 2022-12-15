import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { paginationDataReducer } from './reducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    paginationData: paginationDataReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { filterReducer, pageNumberReducer } from './reducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    pageNumber: pageNumberReducer,
    filter: filterReducer,
  },
});

export default store;

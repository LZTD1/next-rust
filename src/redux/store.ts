import { ThunkAction, configureStore, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { categorySlice } from './slices/changeCategory';
import { loadingSiteSlice } from './slices/loadingSite';

const store = () =>
  configureStore({
    reducer: {
      [categorySlice.name]: categorySlice.reducer,
      [loadingSiteSlice.name]: loadingSiteSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);

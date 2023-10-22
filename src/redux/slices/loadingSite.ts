import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';
import { LoadingSite } from '@/@types/redux/ILoadingSite';

const initialState: LoadingSite = {
  loading: 'pending',
};

export const loadingSiteSlice = createSlice({
  name: 'loadingSite',
  initialState,
  reducers: {
    setCategoryState(state, action: PayloadAction<string>) {
      state.loading = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.category,
      };
    },
  },
});

export const { setCategoryState } = loadingSiteSlice.actions;

export const selectLoadingSite = (state: AppState) => state.loadingSite.loading;

export default loadingSiteSlice.reducer;

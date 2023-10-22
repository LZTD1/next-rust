import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';
import { CategoryState } from '@/@types/redux/IChangeCategory';

const initialState: CategoryState = {
  category: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryState(state, action: PayloadAction<number>) {
      state.category = action.payload;
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

export const { setCategoryState } = categorySlice.actions;

export const selectCategoryState = (state: AppState) => state.category.category;

export default categorySlice.reducer;

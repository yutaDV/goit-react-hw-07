import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Екшени
export const { changeFilter } = filtersSlice.actions;

// Селектори
export const selectNameFilter = state => state.filters.name;

export default filtersSlice.reducer;

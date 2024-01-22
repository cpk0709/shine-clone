import { createSlice } from '@reduxjs/toolkit';

export interface Common {
  initial: boolean;
}

export const initialState: Common = {
  initial: true,
};

const commonSlice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    handleInital: (state) => {
      state.initial = !state.initial;
    },
  },
});

export const { handleInital } = commonSlice.actions;

export default commonSlice.reducer;

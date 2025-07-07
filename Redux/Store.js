import { configureStore, createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    value: '',
  },
  reducers: {
    saveText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveText } = textSlice.actions;

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
  },
});

export default store;

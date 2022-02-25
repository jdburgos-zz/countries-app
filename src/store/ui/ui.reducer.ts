/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  theme: string;
}

const initialUiState: UiState = { theme: 'light' };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    setTheme(state: UiState, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = uiSlice.actions;

export default uiSlice.reducer;

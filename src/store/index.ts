/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import uiReducer from './ui/ui.reducer';

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

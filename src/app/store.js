import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/user_listSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './slice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});

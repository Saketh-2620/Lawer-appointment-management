import { createSlice } from '@reduxjs/toolkit';
import  firms  from '../data.js';

const initialState = {
  firms,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      const { firmId, lawyerId, time, date, description} = action.payload;

      const firm = state.firms.find((firm) => firm.id === firmId);
      const lawyer = firm.lawyers.find((lawyer) => lawyer.id === lawyerId);
        
      if (!lawyer.appointments[date]) {
            lawyer.appointments[date] = [];
      }

      lawyer.appointments[date].push({ time, description });
        
      
    },
    deleteAppointment: (state, action) => {
      const { firmId, lawyerId, date, index } = action.payload;

      const firm = state.firms.find((firm) => firm.id === firmId);
      const lawyer = firm.lawyers.find((lawyer) => lawyer.id === lawyerId);

      lawyer.appointments[date].splice(index, 1);
      if (lawyer.appointments[date].length === 0) {
              delete lawyer.appointments[date];
      }
      
    },
  }



});

export const { bookAppointment, deleteAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;

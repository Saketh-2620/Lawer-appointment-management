import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../store/slice";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Paper,
  Container,
  Alert, // Import MUI Alert
} from "@mui/material";
import dayjs from "dayjs";

const ScheduleAppointment = () => {
  const { firmId, lawyerId } = useParams();
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const today = dayjs().format("YYYY-MM-DD");

  const firm = useSelector((state) =>
    state.appointments.firms.find((firm) => firm.id === parseInt(firmId))
  );

  const lawyer = firm?.lawyers.find(
    (lawyer) => lawyer.id === parseInt(lawyerId)
  );

  useEffect(() => {
    if (lawyer) {
      setSelectedTime("");
      updateAvailableTimes(selectedDate);
      setDescription("");
    }
  }, [lawyer, selectedDate]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const updateAvailableTimes = (date) => {
    const appointmentsForDate = lawyer.appointments[date] || [];
    const bookedTimes = appointmentsForDate.map((appt) => appt.time);

    let remainingTimes = lawyer.availability.filter(
      (time) => !bookedTimes.includes(time)
    );

    if (date === today) {
      const currentTime = dayjs().format("HH:mm");
      remainingTimes = remainingTimes.filter((time) => time > currentTime);
    }

    setAvailableTimes(remainingTimes);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setSuccessMessage("");
    updateAvailableTimes(newDate);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setSuccessMessage("");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setSuccessMessage("");
  };

  const handleBookAppointment = () => {
    if (selectedTime && selectedDate && description) {
      dispatch(
        bookAppointment({
          firmId: parseInt(firmId),
          lawyerId: parseInt(lawyerId),
          time: selectedTime,
          date: selectedDate,
          description,
        })
      );
      setSuccessMessage("Appointment successfully booked!");
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Schedule an 30 min Appointment with {lawyer?.name}
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Paper
          elevation={3}
          sx={{
            p: 3,
            mt: 3,
            width: "100%",
            maxWidth: { xs: "100%", sm: "80%", md: "50%" },
          }}
          style={{
            backgroundColor: "#f4f5f2",
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Select Date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              inputProps={{ min: today }}
              fullWidth
              margin="normal"
            />

            {availableTimes.length > 0 ? (
              <>
                <TextField
                  select
                  label="Select Time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  fullWidth
                  margin="normal"
                >
                  {availableTimes.map((time, index) => (
                    <MenuItem key={index} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Appointment Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                />
              </>
            ) : (
              <Typography sx={{ color: "error.main", my: 2 }}>
                Appointments not available for this day
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleBookAppointment}
              disabled={
                availableTimes.length === 0 || !selectedTime || !description
              }
              fullWidth
              sx={{ mt: 2 }}
              style={{
                backgroundColor:
                  availableTimes.length === 0 || !selectedTime || !description
                    ? null
                    : "#507687",
              }}
            >
              Confirm Appointment
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ScheduleAppointment;

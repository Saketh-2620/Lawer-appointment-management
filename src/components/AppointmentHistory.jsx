import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";

import DeleteIcon from "@mui/icons-material/Delete";

import { deleteAppointment } from "../store/slice";

const AppointmentHistory = () => {
  const { firmId, lawyerId } = useParams();
  const dispatch = useDispatch();

  const firm = useSelector((state) =>
    state.appointments.firms.find((firm) => firm.id === parseInt(firmId))
  );

  const lawyer = firm?.lawyers.find(
    (lawyer) => lawyer.id === parseInt(lawyerId)
  );

  const appointments = lawyer.appointments;

  const handleDeleteAppointment = (date, index) => {
    dispatch(
      deleteAppointment({
        firmId: parseInt(firmId),
        lawyerId: parseInt(lawyerId),
        date,
        index,
      })
    );
  };

  const currentTime = dayjs();

  return (
    <Box sx={{ ml: 4 }}>
      <Typography variant="h4" gutterBottom>
        Appointment History for {lawyer.name}
      </Typography>

      {Object.keys(appointments).length > 0 ? (
        Object.keys(appointments).map((date) => (
          <Box key={date} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ my: 2 }}>
              {`${date}`}
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {appointments[date].map((appointment, index) => {
              const startTime = dayjs(
                `${date} ${appointment.time}`,
                "YYYY-MM-DD HH:mm"
              );
              const endTime = startTime.add(30, "minute").format("HH:mm");
              const isFutureAppointment = startTime.isAfter(currentTime);

              return (
                <Box key={index} sx={{ position: "relative", mb: 4 }}>
                  <Card
                    sx={{
                      mb: 0.5,
                      p: 1,
                      position: "relative",
                      width: "100%",
                      maxWidth: { xs: "60%", sm: "40%", md: "30%" },
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    elevation={1}
                    style={{
                      backgroundColor: "#f4f5f2",
                    }}
                  >
                    <CardContent>
                      {isFutureAppointment && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                          }}
                        >
                          <IconButton
                            onClick={() => handleDeleteAppointment(date, index)}
                            size="small"
                            aria-label="delete appointment"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      )}
                      <Typography variant="body1" gutterBottom>
                        {appointment.time} - {endTime}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {appointment.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No appointment history available
        </Typography>
      )}
    </Box>
  );
};

export default AppointmentHistory;

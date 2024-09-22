import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirmList from "./components/FirmList";
import LawyerList from "./components/LawyerList";
import ScheduleAppointment from "./components/ScheduleAppointment";
import AppointmentHistory from "./components/AppointmentHistory";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "#384B70",
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Lawyer Appointment Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Routes>
            <Route path="/" element={<FirmList />} />
            <Route path="/firm/:firmId/lawyers" element={<LawyerList />} />
            <Route
              path="/firm/:firmId/lawyer/:lawyerId/schedule"
              element={<ScheduleAppointment />}
            />
            <Route
              path="/firm/:firmId/lawyer/:lawyerId/history"
              element={<AppointmentHistory />}
            />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;

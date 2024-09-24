import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import firms from "../data.js";
import { useNavigate } from "react-router-dom";

const FirmList = () => {
  const navigate = useNavigate();

  const handleFindLawyers = (firmId) => {
    navigate(`/firm/${firmId}/lawyers`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Law Firms
      </Typography>
      <Grid container spacing={4}>
        {firms.map((firm) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={firm.id}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 5,
                backgroundColor: "#f4f5f2",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {firm.name}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#507687",
                    borderRadius: 3,
                  }}
                  variant="contained"
                  onClick={() => handleFindLawyers(firm.id)}
                  fullWidth
                >
                  Find Lawyers
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FirmList;

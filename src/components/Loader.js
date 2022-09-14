import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

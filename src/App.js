import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import MuiThemeProvider from "./contextProviders/MuiThemeProvider";


function App() {
  return (
    <MuiThemeProvider>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} sx={{justifyContent: "space-between"}} >
          <Leftbar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;

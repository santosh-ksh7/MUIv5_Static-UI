import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Stack } from "@mui/material"
import Feed from "../components/Feed"
import Leftbar from "../components/Leftbar"
import Navbar from "../components/Navbar"
import Rightbar from "../components/Rightbar"
import MuiThemeProvider from "../contextProviders/MuiThemeProvider"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"


function Page1() {

  const[open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
      <Fab onClick={() => setOpen(true)} color="primary" aria-label="add" size="small" sx={{position: "fixed", bottom: "30px", left: {xs: "50%", sm: "30px", md: "30px"}}} >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">A section for user input</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>Create</Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default Page1
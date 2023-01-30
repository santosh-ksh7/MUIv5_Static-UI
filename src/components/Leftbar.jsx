import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useContext } from "react";
import { toggleModeContext } from "../contextProviders/MuiThemeProvider";


function Leftbar() {

    const{currMode, setCurrMode} = useContext(toggleModeContext);

    const handleChange = () => {
        let updatedMode = currMode === "light" ? "dark" : "light";
        setCurrMode(updatedMode)
    }

  return (
    <Box flex={{xs: "0.5", sm: "1", md: "1"}} sx={{display: {xs: "block"}}} >
         <Box sx={{position: "fixed"}}>
             <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Stories" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Market" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText sx={{display: {xs: "none", sm: "block"}}} primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{display: {xs: "none", sm: "block"}}}>
                        {currMode === "light" ? <Brightness2Icon /> : <Brightness5Icon />}
                    </ListItemIcon>
                    <Switch
                        onChange={handleChange}
                    />
                </ListItem>
              </List>
         </Box>
    </Box>
  )
}

export default Leftbar
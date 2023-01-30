import { AppBar, Avatar, Badge, Box, IconButton, InputBase, ListItemIcon, ListItemText, Menu, MenuItem, styled, Typography } from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";




const MyToolbar = styled(Box)({
    display: "flex",
    justifyContent: "space-between"
})

const MySearch = styled(InputBase)({
    width: "40%",
    backgroundColor: "white",
    color: "black"
})

const DesktopIcon = styled("div")(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")] : {
        display: "flex"
    }
}))

const MobileIcon = styled("div")(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.down("sm")] : {
        display: "flex"
    }
}))



function Navbar() {

    const[open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

  return (
    <AppBar position="sticky" sx={{padding: "10px"}}>
        <MyToolbar>
            <Typography variant="h6" sx={{display: {xs: "none", sm:"block"}}}>Material UI</Typography>
            <BrushIcon sx={{display: {xs: "block", sm:"none"}}} />
            <MySearch placeholder="Search..." />
            <DesktopIcon>
                <IconButton>
                    <Badge badgeContent={4} color="success">
                        <NotificationsActiveIcon color="action" />
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCartIcon  color="action" />
                    </Badge>
                </IconButton>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                <Typography variant="span" >Log-out</Typography>
            </DesktopIcon>
            <MobileIcon>
                <Avatar onClick={() => setOpen(true)} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
            </MobileIcon>
        </MyToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <NotificationsActiveIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Notificcations</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <ShoppingCartIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cart</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Log-out</ListItemText>
            </MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar
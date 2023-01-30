import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


function Rightbar() {
  return (
    <Box flex={2} sx={{display: {xs: "none", sm: "none", md: "block"}}}>
        <Box sx={{position: "fixed"}}>
            <Typography sx={{marginTop: "10px"}} variant="h6">Online Friends</Typography>
            <AvatarGroup sx={{flexDirection: "row-reverse", justifyContent: "center"}} total={15}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
            </AvatarGroup>
            <Typography sx={{marginTop: "10px"}} variant="h6">Recent Updates</Typography>
            <ImageList cols={3} rowHeight={150} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
                            alt="img"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
                            alt="img"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
                            alt="img"
                            loading="lazy"
                        />
                    </ImageListItem>
            </ImageList>
            <Typography sx={{marginTop: "10px"}} variant="h6">Recent Conversation</Typography>
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </>
                    }
                    />
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Rightbar
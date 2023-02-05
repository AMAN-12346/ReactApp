import React from 'react';
import { Drawer as MUIDrawer, ListItem, ListItemIcon, ListItemText, List, ListItemButton, MailIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardComponent from './components/card'

const Navigate = () => {

    const Typographystyle = { backgroundColor: '#1751EA' }
    const Toolbarstyle = { backgroundColor: '#1751EA', margin: " ", marginRight: '20px' }
    // const Cardstyle={minWidth: 290, backgroundColor:'red',margin:"10% 15% 0% ", width: 290}
    return (
        <>
            <Toolbar style={Toolbarstyle}>
                <Typography style={Typographystyle} variant="h8" noWrap component="div">
                    Responsive drawer
                </Typography>
            </Toolbar>

            <MUIDrawer variant='permanent'>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>

            <CardComponent />

            {/* <Card style={Cardstyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

        <CardActions>
        <Button size="small">Learn More</Button>
         </CardActions>
          </Card>

      <Card style={Cardstyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h6" component="div">
         </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card> */}
        </>

    )
}
export default Navigate;
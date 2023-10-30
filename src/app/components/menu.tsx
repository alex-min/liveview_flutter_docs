
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import emitter from '../event-bus';

enum NavbarItem {
    navigation, buttons
}

export function Menu() {
    const [open, setOpen] = useState(NavbarItem.navigation);

    return <div className="bg-white text-sm" style={{ width: '300px' }}>
        <div className="bg-white p-4">
            List of all the component demos
        </div>
        <List dense={true}>
            <ListItemButton onClick={() => setOpen(NavbarItem.navigation)}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Navigation" />
                {open == NavbarItem.navigation ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open == NavbarItem.navigation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense={true}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => emitter.emit('code-change', 'AppBar')}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="App bar" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => emitter.emit('code-change', 'bottom-bar')}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Bottom navigation bar" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => emitter.emit('code-change', 'navigation-rail')}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Navigation Rail" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={() => setOpen(NavbarItem.buttons)}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Buttons" />
                {open == NavbarItem.buttons ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open == NavbarItem.buttons} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense={true}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => emitter.emit('code-change', 'ElevatedButton')}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="ElevatedButton" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={() => emitter.emit('code-change', 'TextField')}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Text Field" />
            </ListItemButton>
        </List>
    </div>
}
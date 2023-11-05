'use client';

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
import AppsIcon from '@mui/icons-material/Apps';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MapIcon from '@mui/icons-material/Map';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import Crop169Icon from '@mui/icons-material/Crop169';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AllInboxIcon from '@mui/icons-material/AllInbox';

enum NavbarItem {
  navigation, buttons
}

export function Menu() {
  const [open, setOpen] = useState(NavbarItem.navigation as NavbarItem | null);

  return <div className="bg-white text-sm" style={{ width: '300px' }}>
    <div className="bg-white p-4">
      List of all the component demos
    </div>
    <List dense={true}>
      <ListItemButton onClick={() => setOpen(open == NavbarItem.navigation ? null: NavbarItem.navigation)}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Navigation" />
        {open == NavbarItem.navigation ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open == NavbarItem.navigation} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense={true}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'AppBar' }, '', '/component/app-bar')
            emitter.emit('code-change', 'AppBar')
          }}>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary="App bar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'BottomNavigationBar' }, '', '/component/bottom-navigation-bar')
            emitter.emit('code-change', 'BottomNavigationBar')
          }
          }>
            <ListItemIcon>
              <HomeMaxIcon />
            </ListItemIcon>
            <ListItemText primary="Bottom navigation bar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'NavigationRail' }, '', '/component/navigation-rail')
            emitter.emit('code-change', 'NavigationRail')
          }}>
            <ListItemIcon>
              <AutoAwesomeMosaicIcon />
            </ListItemIcon>
            <ListItemText primary="Navigation Rail" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => setOpen(open == NavbarItem.buttons ? null : NavbarItem.buttons)}>
        <ListItemIcon>
          <AdsClickIcon />
        </ListItemIcon>
        <ListItemText primary="Buttons" />
        {open == NavbarItem.buttons ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open == NavbarItem.buttons} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense={true}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'ElevatedButton' }, '', '/component/elevated-button')
            emitter.emit('code-change', 'ElevatedButton')
          }}>
            <ListItemIcon>
              <Crop169Icon />
            </ListItemIcon>
            <ListItemText primary="Elevated Button" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'SegmentedButton' }, '', '/component/segmented-button')
            emitter.emit('code-change', 'SegmentedButton')
          }}>
            <ListItemIcon>
              <PowerInputIcon />
            </ListItemIcon>
            <ListItemText primary="Segmented Button" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => {
            history.pushState({ component: 'TextField' }, '', '/component/text-field')
            emitter.emit('code-change', 'TextField')
          }}>
        <ListItemIcon>
          <FormatColorTextIcon />
        </ListItemIcon>
        <ListItemText primary="Text Field" />
      </ListItemButton>
      <ListItemButton onClick={() => {
            history.pushState({ component: 'Form' }, '', '/component/form')
            emitter.emit('code-change', 'Form')
          }}>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Form" />
      </ListItemButton>
    </List>
  </div>
}
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
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import MouseIcon from '@mui/icons-material/Mouse';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChecklistIcon from '@mui/icons-material/Checklist';

enum NavbarItem {
  navigation, buttons, selects
}

export function Menu({ onClick }: { onClick: () => void }) {
  const [open, setOpen] = useState(NavbarItem.navigation as NavbarItem | null);

  return <div className="bg-white text-sm" style={{ width: '300px' }}>
    <div className="bg-white p-4">
      Demo of all the components
    </div>
    <List dense={true}>
      <ListItemButton onClick={() => setOpen(open == NavbarItem.navigation ? null : NavbarItem.navigation)}>
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
            onClick();
          }}>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary="App bar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'BottomNavigationBar' }, '', '/component/bottom-navigation-bar')
            emitter.emit('code-change', 'BottomNavigationBar')
            onClick();
          }
          }>
            <ListItemIcon>
              <HomeMaxIcon />
            </ListItemIcon>
            <ListItemText primary="Bottom navigation bar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'BottomAppBar' }, '', '/component/bottom-app-bar')
            emitter.emit('code-change', 'BottomAppBar')
            onClick();
          }
          }>
            <ListItemIcon>
              <HomeMaxIcon />
            </ListItemIcon>
            <ListItemText primary="Bottom app bar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'PersistentFooterButton' }, '', '/component/persistent-footer-button')
            emitter.emit('code-change', 'PersistentFooterButton')
            onClick();
          }
          }>
            <ListItemIcon>
              <BorderBottomIcon />
            </ListItemIcon>
            <ListItemText primary="Persistent footer buttons" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'NavigationRail' }, '', '/component/navigation-rail')
            emitter.emit('code-change', 'NavigationRail')
            onClick();
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
            onClick();
          }}>
            <ListItemIcon>
              <Crop169Icon />
            </ListItemIcon>
            <ListItemText primary="Elevated Button" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'ActionChip' }, '', '/component/action-chip')
            emitter.emit('code-change', 'ActionChip')
            onClick();
          }}>
            <ListItemIcon>
              <Crop169Icon />
            </ListItemIcon>
            <ListItemText primary="Action chip" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'SegmentedButton' }, '', '/component/segmented-button')
            emitter.emit('code-change', 'SegmentedButton')
            onClick();
          }}>
            <ListItemIcon>
              <PowerInputIcon />
            </ListItemIcon>
            <ListItemText primary="Segmented Button" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'IconButton' }, '', '/component/icon-button')
            emitter.emit('code-change', 'IconButton')
            onClick();
          }
          }>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Icon Button" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => setOpen(open == NavbarItem.selects ? null : NavbarItem.selects)}>
        <ListItemIcon>
          <AutoAwesomeMotionIcon />
        </ListItemIcon>
        <ListItemText primary="Selects" />
        {open == NavbarItem.selects ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open == NavbarItem.selects} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense={true}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {
            history.pushState({ component: 'DropdownButton' }, '', '/component/dropdown-button')
            emitter.emit('code-change', 'DropdownButton')
            onClick();
          }}>
            <ListItemIcon>
              <BrandingWatermarkIcon />
            </ListItemIcon>
            <ListItemText primary="Dropdown button" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => {
        history.pushState({ component: 'TextField' }, '', '/component/text-field')
        emitter.emit('code-change', 'TextField')
        onClick();
      }}>
        <ListItemIcon>
          <FormatColorTextIcon />
        </ListItemIcon>
        <ListItemText primary="Text Field" />
      </ListItemButton>
      <ListItemButton onClick={() => {
        history.pushState({ component: 'Form' }, '', '/component/form')
        emitter.emit('code-change', 'Form')
        onClick();
      }}>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Form" />
      </ListItemButton>
      <ListItemButton onClick={() => {
        history.pushState({ component: 'Badge' }, '', '/component/badge')
        emitter.emit('code-change', 'Badge')
        onClick();
      }}>
        <ListItemIcon>
          <AddToPhotosIcon />
        </ListItemIcon>
        <ListItemText primary="Badge" />
      </ListItemButton>
      <ListItemButton onClick={() => {
        history.pushState({ component: 'Tooltip' }, '', '/component/tooltip')
        emitter.emit('code-change', 'Tooltip')
        onClick();
      }}>
        <ListItemIcon>
          <MouseIcon />
        </ListItemIcon>
        <ListItemText primary="Tooltip" />
      </ListItemButton>
      <ListItemButton onClick={() => {
        history.pushState({ component: 'ListTile' }, '', '/component/list-tile')
        emitter.emit('code-change', 'ListTile')
        onClick();
      }}>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary="List tile" />
      </ListItemButton>
    </List>
  </div>
}
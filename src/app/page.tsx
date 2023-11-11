'use client';
import * as React from 'react';
import { LivePad } from './components/live-pad';
import { Menu } from './components/menu';
import { TopBar } from './components/top-bar';
import Drawer from '@mui/material/Drawer';
import useWindowDimensions from './hooks/useWindowDimentions';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import ListItemText from '@mui/material/ListItemText';

var breakpoints = {
  menu: 1140
}

function ResponsiveMenu({ drawerOpened, setDrawerOpened }: { drawerOpened: boolean, setDrawerOpened: (val: boolean) => void }) {
  var { width } = useWindowDimensions();

  console.log('width', width);
  if (typeof width == 'number' && width < breakpoints.menu) {
    return <React.Fragment key='left'>
      <Drawer
        anchor={'left'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      >
        <Menu />
      </Drawer>
    </React.Fragment>
  }
  return <Menu />;
}

export default function Home({ preload }: { preload?: string }) {
  var [drawerOpened, setDrawerOpened] = React.useState(false)
  var { width } = useWindowDimensions();
  var useTabs = React.useMemo(() => typeof width == 'number' && width < breakpoints.menu, [width]);

  return (
    <main className="min-h-screen bg-slate-600">
      <TopBar showMenuIcon={useTabs} onClickMenuIcon={() => {
        setDrawerOpened(true)
      }} />
      <div className={`flex flex-row w-full ${useTabs ? 'justify-center' : ''}`}>
        <ResponsiveMenu drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />
        <LivePad useTabs={useTabs} preload={preload} />
      </div>
    </main>
  )
}

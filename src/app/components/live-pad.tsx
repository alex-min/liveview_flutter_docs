'use client';
import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { xml, xmlLanguage } from '@codemirror/lang-xml';
import { languages } from '@codemirror/language-data';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import emitter from '../event-bus';
import codeMap from '../code-demos';
import { Snackbar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DataObjectIcon from '@mui/icons-material/DataObject';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useWindowDimensions from '../hooks/useWindowDimentions';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



var demo =
  `<flutter>
  <AppBar elevation="1">
    <title>My new live view native app</title>
  </AppBar>

  <Drawer>
    <ListView>
      <DrawerHeader />
      <Container padding="10">
        <Form phx-change="validate" phx-submit="submit">
          <TextField name="my_input" initialValue="Change me" />
          <Container padding="10 0">
            <ElevatedButton name="submit" type="submit">Submit</ElevatedButton>
          </Container>
        </Form>
      </Container>
    </ListView>
  </Drawer>

  <viewBody>
    <Column mainAxisAlignment="center">
      <Container padding="10 0">
        <Text textAlign="center" style="textTheme: headlineMedium">This is a live view code rendering of Flutter</Text>
      </Container>
      <Container padding="10 0">
        <Text>Edit the code on the left to see your changes live in flutter</Text>
      </Container>
      <Container padding="10 0">
      <Text>The navigation on the bottom simulates a server event</Text>
      </Container>
      <ElevatedButton phx-click="start_now">Start now</ElevatedButton>
    </Column>
  </viewBody>

  <BottomNavigationBar initialValue="0" selectedItemColor="blue-500">
    <BottomNavigationBarItem icon="home" label="Home" live-patch="/page/0" />
    <BottomNavigationBarItem icon="wallet" label="Wallet" live-patch="/page/1" />
    <BottomNavigationBarItem icon="apps" label="Photos" live-patch="/page/2" />
    <BottomNavigationBarItem icon="window" label="Albums" live-patch="/page/3"  />
  </BottomNavigationBar>
</flutter>
`

function loadCode(code: string) {
  // @ts-expect-error
  document.getElementById('flutter')?.contentWindow.postMessage(code);
}


export function LivePad({ preload, useTabs }: { preload?: string, useTabs: boolean }) {
  var { width, height } = useWindowDimensions();
  var [currentTab, setCurrentTab] = React.useState('code');
  // @ts-ignore
  var [value, setValue] = React.useState(preload ? codeMap[preload] : demo);
  // @ts-ignore
  var initialCodeValue = React.useMemo(() => preload ? codeMap[preload] : demo, [preload]);

  var [snackbarOpened, setSnackbarOpened] = React.useState(false);
  var [snackbarEvent, setSnackbarEvent] = React.useState('');
  var [snackbarMessage, setSnackbarMessage] = React.useState('');

  React.useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        if (event.origin != window.origin) { return; }
        var data = event.data as any;
        if (typeof data.type != 'string') { return }

        if (data.type == 'live-patch') {
          // @ts-ignore
          var code = (value) + '';
          if (data.url.match(/\/page\/\d/g)) {
            var path = data.url.split('/')
            code = code.split('\n').map((line) => {
              if (line.indexOf('<BottomNavigationBar') != -1 || line.indexOf('<NavigationRail') != -1) {
                return line.replaceAll(/initialValue="\d"/g, `initialValue="${path[path.length - 1]}"`);
              }
              return line;
            }).join('\n')
          }

          setSnackbarEvent('live-patch');
          setSnackbarMessage(`Navigating to ${data.url}`)
          setSnackbarOpened(true);
          setTimeout(() =>
            // @ts-ignore
            loadCode(code), 50);
        } else {
          setSnackbarEvent(data.data.event)
          setSnackbarMessage(typeof data.data.value == 'string' ? data.data.value : JSON.stringify(data.data.value));
          setSnackbarOpened(true);
        }
      }, false)
  }, [value]);

  // annoying iframe caching on some browsers
  React.useEffect(() => {
    var iframe = document.getElementById('flutter') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src + `&s=${new Date().getTime()}`
    }
  }, [currentTab]);

  emitter.on('code-change', (val: string) => {
    // @ts-ignore
    let code = codeMap[val];

    setValue(code);
    loadCode(code);
  });

  return <>
    <div className={`flex ${useTabs ? 'flex-col items-center' : 'flex-row'} w-full justify-center mt-5`} style={useTabs ? { width: `${width || 600}px` } : {}}>
      {useTabs ? <Tabs value={currentTab} aria-label="basic tabs example" onChange={(_, tab) => setCurrentTab(tab)}>
        <Tab label="Code" value="code" />
        <Tab label="Mobile View" value="mobile" />
      </Tabs> : null}
      {!useTabs || currentTab == 'code' ? <div className={`rounded-l-lg ${useTabs ? 'rounded-lg' : 'w-1/2'} overflow-hidden`}>
        <div style={{
          height: useTabs ? `${((height || 500) - 150)} px` : '600px',
          background: '#1e1e1e',
          width: useTabs ? `${width || 600}px` : undefined
        }
        }>
          <div className="pl-6 py-1" style={{
            color: '#ce9178',
            fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'
          }}>~FLUTTER"""</div>
          <CodeMirror
            autoFocus
            lang="xml"
            value={value}
            height={useTabs ? `${((height || 500) - 180)}px` : '590px'}
            theme={vscodeDark}
            // @ts-expect-error
            extensions={[xml({ base: xmlLanguage, codeLanguages: languages })]}
            onChange={(val) => loadCode(val)} />
        </div>
      </div> : null}
      <iframe id="flutter"
        src={`/flutter/index.html?r=${encodeURIComponent(initialCodeValue ?? '')}`}
        height={useTabs ? `${((height || 500) - 150)} px` : "600"}
        width={useTabs ? `${width || 600}` : undefined}
        style={useTabs && currentTab == 'code' ? { position: 'absolute', left: '-5000px' } : {}}
        className={`${useTabs ? 'rounded-lg' : 'w-1/2'} max-w-md rounded-r-lg bg-white`} />
      <Snackbar open={snackbarOpened}
        autoHideDuration={useTabs ? 1000 : 3000}
        onClose={() => setSnackbarOpened(false)}
        anchorOrigin={useTabs ? { vertical: 'top', horizontal: 'right' } : { vertical: 'bottom', horizontal: 'left' }}
        message={<List dense>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowForwardIosIcon color="info" />
              </ListItemIcon>
              <ListItemText primary={`Server event: ${snackbarEvent}`} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DataObjectIcon color="info" />
              </ListItemIcon>
              <ListItemText primary={`Message sent: ${snackbarMessage}`} />
            </ListItemButton>
          </ListItem>
        </List>}
      />
    </div></>
}
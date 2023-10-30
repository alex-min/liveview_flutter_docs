'use client';
import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { xml, xmlLanguage } from '@codemirror/lang-xml';
import { languages } from '@codemirror/language-data';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import emitter from '../event-bus';
import codeMap from '../code-demos';

var demo =
  `<flutter>
  <viewBody>
    <Center>
      <ElevatedButton>hello world</ElevatedButton>
    </Center>
  </viewBody>

  <BottomNavigationBar currentIndex="0" selectedItemColor="blue-500">
    <BottomNavigationBarIcon name="home" label="Page 1" />
    <BottomNavigationBarIcon live-patch="/second-page" name="home" label="Page 2" />
    <BottomNavigationBarIcon phx-click="inc" name="arrow_upward" label="Increment" />
    <BottomNavigationBarIcon phx-click="dec" name="arrow_downward" label="Decrement" />
  </BottomNavigationBar>
</flutter>
`

function loadCode(code: string) {
  // @ts-expect-error
  document.getElementById('flutter')?.contentWindow.postMessage(code);
}
setTimeout(() => loadCode(demo), 1500);

export function LivePad() {
  var [value, setValue] = React.useState(demo);

  emitter.on('code-change', (val: string) => {

    // @ts-ignore
    let code = codeMap[val];

    setValue(code);
    loadCode(code);
  });
  return <div className="flex flex-row w-full justify-center mt-5">
    <div className="rounded-l-lg w-1/2 overflow-hidden">
      <div style={{ height: '600px', background: '#1e1e1e' }}>
        <div className="pl-6 py-1" style={{
          color: '#ce9178',
          fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'
        }}>~FLUTTER"""</div>
        <CodeMirror
          lang="xml"
          value={value}
          height="100%"
          theme={vscodeDark}
          // @ts-expect-error
          extensions={[xml({ base: xmlLanguage, codeLanguages: languages })]}
          onChange={(val) => loadCode(val)} />
      </div>
    </div>
    <iframe id="flutter" src="/flutter/index.html" height="600" className="w-1/2 max-w-md rounded-r-lg" />
  </div>
}
'use client';
import { LivePad } from '../../components/live-pad';
import { Menu } from '../../components/menu';
import { TopBar } from '../../components/top-bar';


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600">
      <TopBar />
      <div className="flex flex-row w-full">
        <Menu />
        <LivePad preload='ActionChip' />
      </div>
    </main>
  )
}

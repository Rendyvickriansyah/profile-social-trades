import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import ProfileBanner from './components/ProfileBanner.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'
import FeedPost from './components/FeedPost.jsx'
import SubscribedTraders from './components/SubscribedTraders.jsx'
import DiscordNote from './components/DiscordNote.jsx'
import dividerH from './assets/divider-h.svg'

const BODY =
  'Ikut sinyal ETH Long dari @shadowfox. Entry di retest 3.190, ukuran saya kecilkan karena volatilitas lagi tinggi.'

const POSTS = [
  { id: 1, side: 'long', status: 'active' },
  { id: 2, side: 'short', status: 'pending' },
  { id: 3, side: 'long', status: 'expired' },
  { id: 4, side: 'short', status: 'active' },
].map((p) => ({ ...p, author: 'Shadow Fox', time: '2 jam lalu', body: BODY, leverage: '5x', likes: 7, comments: 2 }))

const TABS = ['Aktivitas', 'Pengaturan']

function Tabs({ value, onChange }) {
  return (
    <div role="tablist" className="flex w-full items-center border-b border-line">
      {TABS.map((tab) => {
        const selected = tab === value
        return (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={selected}
            onClick={() => onChange(tab)}
            className={`-mb-px flex items-center justify-center border-b p-[12px] text-center text-[14px] leading-[1.4] whitespace-nowrap transition-colors duration-150 ease-out ${
              selected
                ? 'border-brand bg-gradient-to-b from-[rgba(42,98,255,0)] from-[66.477%] to-brand to-[128.79%] font-medium text-white'
                : 'border-transparent text-muted hover:text-white'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

function Feed() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[22px]">
      {POSTS.map((post, i) => (
        <div key={post.id} className="contents">
          {i > 0 && (
            <div aria-hidden className="relative h-0 w-full shrink-0">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block size-full max-w-none" src={dividerH} />
              </div>
            </div>
          )}
          <FeedPost {...post} />
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState(TABS[0])

  return (
    <div className="min-h-dvh bg-black">
      <Navbar />
      <div className="flex w-full items-start lg:pl-[52px]">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col">
          <ProfileBanner />
          <div className="flex w-full flex-col gap-[32px] px-4 pt-[40px] pb-[80px] md:px-[48px]">
            <ProfileHeader />
            <Tabs value={tab} onChange={setTab} />
            {tab === 'Aktivitas' ? (
              <div className="flex w-full flex-col items-start gap-[52px] xl:flex-row">
                <Feed />
                <aside className="flex w-full shrink-0 flex-col gap-[16px] xl:w-[350px]">
                  <SubscribedTraders />
                  <DiscordNote />
                </aside>
              </div>
            ) : (
              <p className="px-[12px] text-[14px] leading-[1.4] text-muted">Pengaturan profil belum tersedia.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

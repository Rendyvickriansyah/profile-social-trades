import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import ProfileBanner from './components/ProfileBanner.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'
import FeedPost from './components/FeedPost.jsx'
import SubscribedTraders from './components/SubscribedTraders.jsx'
import DiscordNote from './components/DiscordNote.jsx'
import Tabs from './components/Tabs.jsx'
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
  const [hasSwitched, setHasSwitched] = useState(false)

  const selectTab = (next) => {
    if (next === tab) return
    setTab(next)
    setHasSwitched(true)
  }

  return (
    <div className="min-h-dvh bg-black">
      <Navbar />
      <div className="flex w-full items-start lg:pl-[52px]">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col">
          <ProfileBanner />
          <div className="flex w-full flex-col gap-[32px] px-4 pt-[40px] pb-[80px] md:px-[48px]">
            <ProfileHeader />
            <Tabs tabs={TABS} value={tab} onChange={selectTab} />
            {/* Keyed by tab so the panel remounts and replays its entrance on each switch. */}
            <div key={tab} role="tabpanel" className={hasSwitched ? 'tab-panel-enter' : undefined}>
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
          </div>
        </main>
      </div>
    </div>
  )
}

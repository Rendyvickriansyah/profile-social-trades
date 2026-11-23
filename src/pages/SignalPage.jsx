import { useEffect, useRef, useState } from 'react'
import AppShell from '../components/AppShell.jsx'
import SignalCard from '../components/home/SignalCard.jsx'
import PostSignalFab from '../components/signal/PostSignalFab.jsx'
import addLine from '../assets/signal/add-line.svg'
import search from '../assets/signal/search.svg'
import arrowDown from '../assets/home/arrow-down-s-line.svg'

const BASE = [
  { coin: 'BTC', side: 'short', status: 'pending', pnl: '$-', pct: '-%', tone: 'none', entry: '$28,000', tp: '$26,500', sl: '$29,200' },
  { coin: 'SOL', side: 'short', status: 'running', pnl: '-$90', pct: '-2.15%', tone: 'down', entry: '$20,215', tp: '$40,215', sl: '$19,304' },
  { coin: 'SOL', side: 'short', status: 'closed', pnl: '-$75', pct: '-5.80%', tone: 'down', entry: '$25,215', tp: '$30,954', sl: '$15,615' },
  { coin: 'BTC', side: 'long', status: 'pending', pnl: '$-', pct: '-%', tone: 'none', entry: '$28,000', tp: '$26,500', sl: '$29,200' },
  { coin: 'SOL', side: 'long', status: 'running', pnl: '+$120', pct: '+8.12%', tone: 'up', entry: '$20,215', tp: '$40,215', sl: '$19,304' },
  { coin: 'SOL', side: 'long', status: 'closed', pnl: '+$80', pct: '+4.32%', tone: 'up', entry: '$25,215', tp: '$30,954', sl: '$15,615' },
]

// The design shows six cards; repeat them so the list is long enough to scroll.
const SIGNALS = [...BASE, ...BASE].map((s, i) => ({ ...s, id: i }))

const FILTERS = ['Urutkan', 'Semua Trader', 'Status']

const filterButton =
  'flex h-[47px] items-center gap-[4px] border border-line bg-gradient-to-b from-[#1c1c1c] to-[#121111] py-[8px] pr-[13px] pl-[16px] text-[13px] leading-[1.4] font-medium whitespace-nowrap text-white transition-colors duration-150 ease-out hover:from-[#242424]'

export default function SignalPage() {
  const postButtonRef = useRef(null)
  const searchRef = useRef(null)
  const [showFab, setShowFab] = useState(false)

  // The FAB stands in for the header button: it shows only once that button has
  // scrolled up out of view, and leaves again when it comes back.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowFab(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    observer.observe(postButtonRef.current)
    return () => observer.disconnect()
  }, [])

  // Ctrl/Cmd + K focuses search, as the hint in the field says.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-dvh overflow-x-clip bg-black">
      <AppShell>
        <div className="flex w-full flex-wrap items-end justify-between gap-4 px-4 py-[20px] md:px-[32px]">
          <h1 className="min-w-0 flex-1 text-[20px] leading-[1.4] font-medium text-white">Hello, Fatah Abdillah Siregar Alwi</h1>
          <button
            ref={postButtonRef}
            type="button"
            className="relative flex h-[40px] shrink-0 items-center justify-center gap-[8px] overflow-clip rounded-[4px] border border-white px-[24px] py-[10px] text-[14px] leading-[1.4] font-medium text-white shadow-[0px_31px_19px_0px_rgba(42,98,255,0.13),0px_14px_20px_0px_rgba(42,98,255,0.12)] transition-[scale] duration-150 ease-out active:scale-[0.97]"
            style={{
              backgroundImage:
                'linear-gradient(96.03deg, rgb(20, 71, 214) 1.4587%, rgb(32, 79, 211) 36.588%, rgb(76, 121, 242) 81.52%, rgb(119, 156, 255) 96.534%)',
            }}
          >
            <img alt="" className="relative size-[16px]" src={addLine} />
            <span className="relative">Post Signal</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.135px_2px_0px_rgba(255,255,255,0.25),inset_0px_3.202px_6.405px_0px_rgba(255,255,255,0.25)]" />
          </button>
        </div>

        <div className="flex w-full flex-wrap items-center justify-between gap-[8px] px-4 pt-[32px] md:px-[32px]">
          <label className="flex w-full items-center gap-[12px] border border-line bg-[#0a0a0a] py-[8px] pr-[8px] pl-[12px] transition-colors duration-150 ease-out focus-within:border-white/30 md:w-[425px]">
            <img alt="" className="size-[18px] shrink-0" src={search} />
            <input
              ref={searchRef}
              type="search"
              placeholder="Cari trader…"
              aria-label="Cari trader"
              className="min-w-0 flex-1 bg-transparent font-geist text-[16px] leading-[1.4] text-white outline-none placeholder:text-muted md:text-[14px]"
            />
            <kbd className="border border-line bg-[#1a1a1a] px-[8px] py-[8px] font-geist text-[11px] leading-[11px] whitespace-nowrap text-muted">
              CTRL + K
            </kbd>
          </label>
          <div className="flex items-center gap-[8px]">
            {FILTERS.map((label) => (
              <button key={label} type="button" className={filterButton}>
                {label}
                <img alt="" className="size-[14px]" src={arrowDown} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[28px] px-4 pt-[32px] md:grid-cols-2 md:px-[32px]">
          {SIGNALS.map(({ id, ...signal }) => (
            <SignalCard key={id} {...signal} />
          ))}
        </div>
      </AppShell>

      <PostSignalFab visible={showFab} />
    </div>
  )
}

import { useState } from 'react'
import SignalCard from './SignalCard.jsx'
import arrowDown from '../../assets/home/arrow-down-s-line.svg'

const TABS = [
  { id: 'mine', label: 'My Signal', count: '20' },
  { id: 'copied', label: 'Copied Signal', count: '99+' },
]

const PENDING = { coin: 'BTC', side: 'short', status: 'pending', pnl: '$-', pct: '-%', tone: 'none', entry: '$28,000', tp: '$26,500', sl: '$29,200' }

const SIGNALS = [
  { id: 1, coin: 'SOL', side: 'short', status: 'running', pnl: '-$90', pct: '-2.15%', tone: 'down', entry: '$20,215', tp: '$40,215', sl: '$19,304' },
  { id: 2, ...PENDING },
  { id: 3, coin: 'SOL', side: 'short', status: 'running', pnl: '-$75', pct: '-1.82%', tone: 'down', entry: '$25,215', tp: '$30,954', sl: '$19,304' },
  { id: 4, ...PENDING },
  { id: 5, coin: 'SOL', side: 'short', status: 'running', pnl: '-$90', pct: '-2.15%', tone: 'down', entry: '$20,215', tp: '$40,215', sl: '$19,304' },
  { id: 6, coin: 'SOL', side: 'long', status: 'closed', pnl: '+$80', pct: '+4.32%', tone: 'up', entry: '$25,215', tp: '$30,954', sl: '$15,615' },
]

const filterButton =
  'flex h-[40px] items-center gap-[4px] border border-line bg-gradient-to-b from-[#1c1c1c] to-[#121111] py-[8px] pr-[13px] pl-[16px] text-[13px] leading-[1.4] font-medium text-white transition-colors duration-150 ease-out hover:from-[#242424]'

export default function SignalSection() {
  const [tab, setTab] = useState('mine')

  return (
    <section className="flex w-full flex-col gap-[16px] px-4 pt-[32px] pb-[10px] md:px-[24px]">
      <div className="flex w-full flex-wrap items-center justify-between gap-[8px]">
        <div role="tablist" className="flex items-center gap-[8px] whitespace-nowrap">
          {TABS.map((t) => {
            const selected = t.id === tab
            return (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setTab(t.id)}
                className={`flex h-[40px] items-center gap-[4px] border px-[16px] py-[8px] text-[14px] leading-[1.4] shadow-[0px_0px_0px_1px_#131313] transition-colors duration-150 ease-out ${
                  selected
                    ? 'border-white/20 bg-gradient-to-b from-[#2c64ff] to-[#0031b8] font-medium text-white'
                    : 'border-line bg-gradient-to-b from-[#1c1c1c] to-[#121111] font-geist text-[#a3a3a3] hover:text-white'
                }`}
              >
                {t.label}
                <span className="font-geist text-[12px]">•</span>
                <span className="tabular-nums">{t.count}</span>
              </button>
            )
          })}
        </div>
        <div className="flex items-center gap-[8px]">
          {['Urutkan', 'Status'].map((label) => (
            <button key={label} type="button" className={filterButton}>
              {label}
              <img alt="" className="size-[14px]" src={arrowDown} />
            </button>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[28px] md:grid-cols-2">
        {SIGNALS.map(({ id, ...signal }) => (
          <SignalCard key={id} {...signal} />
        ))}
      </div>
    </section>
  )
}

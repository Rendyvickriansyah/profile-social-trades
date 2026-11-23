import { useState } from 'react'
import chartArea from '../../assets/home/chart-area.svg'
import chartLine from '../../assets/home/chart-line.svg'
import axisTick from '../../assets/home/axis-tick.svg'
import crosshair from '../../assets/home/crosshair.svg'

const RANGES = ['1D', '1W', '1M', '3M', '1Y']
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function BalanceChart() {
  const [range, setRange] = useState('1W')

  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-4 py-[12px] md:px-[32px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px] leading-[1.4] text-white/70">Account Balance</p>
          <div className="flex items-end gap-[17px]">
            <p className="text-[32px] leading-none font-medium tracking-[-0.64px] whitespace-nowrap text-white tabular-nums">
              Rp6.612.215.746
            </p>
            <p className="mb-[6px] flex w-[71px] items-center justify-center rounded-[6px] border border-line bg-gradient-to-b from-[rgba(66,238,63,0.4)] to-[rgba(13,66,12,0.4)] px-[10px] py-[8px] text-[12px] leading-none font-medium text-[#5dee73] tabular-nums">
              +12.45%
            </p>
          </div>
        </div>

        <div role="radiogroup" aria-label="Rentang waktu" className="flex items-center gap-[4px] border border-line bg-[#0e0e0e] p-[4px]">
          {RANGES.map((r) => (
            <button
              key={r}
              type="button"
              role="radio"
              aria-checked={r === range}
              onClick={() => setRange(r)}
              className={`px-[8px] py-[4px] text-[14px] leading-none text-white transition-colors duration-150 ease-out ${
                r === range ? 'bg-white/10' : 'rounded-[4px] hover:bg-white/5'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-clip pt-[32px] pr-4 pl-4 md:pr-[32px] md:pl-[24px]">
        <div className="relative h-[162px] w-full overflow-clip border-b border-line">
          {/* The design mirrors both graphics horizontally. */}
          <img alt="" className="absolute inset-0 size-full -scale-x-100" src={chartArea} />
          <div className="absolute inset-[0_0_22.77%_0] -scale-x-100">
            <span className="absolute inset-[-0.4%_0]">
              <img alt="" className="block size-full max-w-none" src={chartLine} />
            </span>
          </div>
          {/* Dot grid: the design's 2.5 × 2px #D9D9D9 dots at 10%, ~20px apart, rows every 16px from y=15. */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[15px] h-[113px] bg-size-[19.98px_16px] opacity-10"
            style={{ backgroundImage: 'radial-gradient(1.25px 1px at 1.25px 1px, #d9d9d9 99%, transparent)' }}
          />
        </div>

        <ol className="flex w-full justify-between" aria-label="Hari">
          {DAYS.map((d) => (
            <li key={d} className="flex flex-col items-center gap-[6px]">
              <img alt="" className="h-[16px] w-px" src={axisTick} />
              <span className="text-[16px] leading-[1.4] font-medium text-muted">{d}</span>
            </li>
          ))}
        </ol>

        {/* Pinned data point from the design (Sunday 16 July). */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-[calc(50%+69.5px)] hidden h-[195px] w-px -translate-x-1/2 md:block">
          <img alt="" className="absolute inset-0 size-full" src={crosshair} />
        </div>
        <div aria-hidden className="absolute top-[42px] left-[calc(50%+69px)] hidden size-[8px] -translate-x-1/2 bg-white md:block" />
        <div className="absolute top-[15px] left-[calc(50%+175px)] hidden -translate-x-1/2 flex-col gap-[4px] border border-line bg-gradient-to-b from-[#000309] to-[#1b1b1b] py-[8px] pr-[32px] pl-[12px] shadow-[inset_0px_-1.66px_1.66px_0px_rgba(0,0,0,0.12),inset_0px_1px_1px_0px_rgba(255,255,255,0.12)] md:flex">
          <p className="text-[12px] leading-[1.4] tracking-[0.36px] whitespace-nowrap text-muted">Minggu 16 Juli 2026</p>
          <p className="text-[18px] leading-[1.4] font-medium whitespace-nowrap text-white tabular-nums">Rp4.337.405.975</p>
        </div>
      </div>
    </section>
  )
}

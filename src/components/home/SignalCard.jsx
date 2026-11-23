import Status from '../Status.jsx'
import solSymbol from '../../assets/home/sol-symbol.svg'
import btcSymbol from '../../assets/home/btc-symbol.svg'
import cardArrow from '../../assets/home/card-arrow.svg'
import cardDivider from '../../assets/home/card-divider.svg'
import dotSep from '../../assets/home/dot-sep.svg'
import users from '../../assets/home/users.svg'

const COINS = {
  SOL: (
    <span className="relative size-[28px] shrink-0 overflow-clip rounded-full border-[1.4px] border-line bg-black">
      <span className="absolute inset-[calc(35.25%-0.41px)_calc(28.13%-0.61px)_calc(35.06%-0.42px)_calc(25%-0.7px)]">
        <img alt="" className="block size-full" src={solSymbol} />
      </span>
    </span>
  ),
  BTC: <img alt="" className="size-[22px] shrink-0" src={btcSymbol} />,
}

// Pending signals have no PnL yet; the others are colored by sign.
const PNL_TONE = { up: 'text-[#42ee3f]', down: 'text-[#ee3f3f]', none: 'text-muted' }

function Level({ label, value }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
      <span className="font-mono text-[14px] leading-[1.2] font-medium tracking-[0.28px] text-muted uppercase">{label}</span>
      <span className="font-mono text-[14px] leading-[1.2] font-medium tracking-[0.28px] whitespace-nowrap text-white/60 tabular-nums">
        {value}
      </span>
    </div>
  )
}

const levelDivider = <span aria-hidden className="h-[36px] w-px shrink-0 bg-[#1d1d1d]" />

// `mine` adds the owner's Edit / Tutup actions (Home's My Signal list).
export default function SignalCard({ coin, side, status, pnl, pct, tone, entry, tp, sl, mine = false }) {
  return (
    <article className="flex w-full flex-col gap-[12px] border border-line bg-gradient-to-b from-[#090909] to-[#0e0e0e] px-[20px] py-[16px]">
      <div className="flex w-full flex-col gap-[16px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[8px]">
            {COINS[coin]}
            <span className="text-[16px] leading-[1.4] font-medium text-white">{coin}</span>
            <span className={`font-mono text-[16px] leading-[1.4] font-medium ${side === 'long' ? 'text-[#90faa0]' : 'text-[#ff6060]'}`}>
              {side.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-[4px]">
            <Status state={status} />
            <a
              href="#"
              aria-label={`Buka sinyal ${coin}`}
              className="flex size-[25px] items-center justify-center border border-line bg-gradient-to-b from-[#1c1c1c] to-[#121111] transition-colors duration-150 ease-out hover:from-[#242424]"
            >
              <img alt="" className="size-[13px]" src={cardArrow} />
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[6px] whitespace-nowrap">
          <div className="flex w-full justify-between text-[12px] leading-none text-[#b8b8b8]">
            <span>PNL (USDT)</span>
            <span>(%)</span>
          </div>
          <div className={`flex w-full justify-between font-geist text-[22px] leading-none font-bold tracking-[-0.22px] tabular-nums ${PNL_TONE[tone]}`}>
            <span>{pnl}</span>
            <span>{pct}</span>
          </div>
        </div>

        <div className="flex w-full items-center gap-[24px] pr-[10px]">
          <Level label="Entry" value={entry} />
          {levelDivider}
          <Level label="TP" value={tp} />
          {levelDivider}
          <div className="flex min-w-0 flex-1 pr-[16px]">
            <Level label="SL" value={sl} />
          </div>
        </div>
      </div>

      <img alt="" aria-hidden className="h-px w-full" src={cardDivider} />

      <div className="flex w-full items-center justify-between">
        <span className="text-[14px] leading-[1.4] text-white/70">Shadow Fox</span>
        <span className="flex items-center gap-[8px] font-geist text-[12px] leading-[1.4] text-muted">
          3 Days ago
          <img alt="" className="size-[3px]" src={dotSep} />
          <span className="flex items-center gap-[4px] tabular-nums">
            <img alt="" className="size-[12px]" src={users} />
            35.678
          </span>
        </span>
      </div>

      {mine && (
        <div className="flex w-full gap-[12px]">
          {['Edit Sinyal', 'Tutup Sinyal'].map((label) => (
            <button
              key={label}
              type="button"
              className="flex-1 border border-line bg-[#1a1a1a] px-[12px] py-[8px] text-[12px] leading-[1.4] font-medium text-white transition-[background-color,scale] duration-150 ease-out hover:bg-[#222] active:scale-[0.98]"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </article>
  )
}

import rank1Bg from '../../assets/home/rank-1-bg.png'
import rank2Bg from '../../assets/home/rank-2-bg.png'
import rank3Bg from '../../assets/home/rank-3-bg.png'
import rankEdge1 from '../../assets/home/rank-edge-1.svg'
import rankEdge from '../../assets/home/rank-edge.svg'
import traderAvatar from '../../assets/home/trader-avatar.png'
import oliviaAvatar from '../../assets/home/avatar-olivia.png'
import arrowUpRight from '../../assets/home/arrow-up-right.svg'
import btcMask from '../../assets/home/btc-mask.svg'
import btc from '../../assets/home/btc.svg'
import eth from '../../assets/home/eth.svg'
import tether from '../../assets/home/tether.svg'
import bnb from '../../assets/home/bnb.png'
import solana from '../../assets/home/solana.svg'
import triUp from '../../assets/home/tri-up.svg'
import triDown from '../../assets/home/tri-down.svg'

// Ranks come from the design as-is, including the repeated #2.
const LEADERS = [
  { rank: '#1', name: 'Fatah', pnl: '+$176,975.76', avatar: traderAvatar, podium: rank1Bg, edge: rankEdge1 },
  { rank: '#2', name: 'Olivia', pnl: '+$110,245.67', avatar: oliviaAvatar, podium: rank2Bg, edge: rankEdge, ring: true },
  { rank: '#2', name: 'Isabella', pnl: '+$108,765.43', avatar: traderAvatar, podium: rank3Bg, edge: rankEdge },
  { rank: '#4', name: 'Emma', pnl: '+$105,678.90', avatar: traderAvatar },
  { rank: '#5', name: 'Lucas', pnl: '+$101,234.56', avatar: traderAvatar },
]

const COINS = [
  {
    name: 'Bitcoin',
    signals: 60,
    price: '$78,361.99',
    change: '0.38%',
    up: true,
    icon: (
      <span className="relative size-[28px] shrink-0 overflow-clip">
        <span className="absolute inset-0 mask-alpha mask-no-repeat mask-size-[28px_28px]" style={{ maskImage: `url("${btcMask}")` }}>
          <span className="absolute inset-[-5.93%_-11.86%_-17.79%_-11.86%]">
            <img alt="" className="block size-full max-w-none" src={btc} />
          </span>
        </span>
      </span>
    ),
  },
  {
    name: 'Ethereum',
    signals: 56,
    price: '$2,323.10',
    change: '0.83%',
    up: true,
    icon: (
      <span className="relative size-[28px] shrink-0 overflow-clip rounded-full bg-white">
        <img alt="" className="absolute top-[calc(50%+0.14px)] left-[calc(50%+0.34px)] size-[18.289px] -translate-1/2" src={eth} />
      </span>
    ),
  },
  {
    name: 'Tether',
    signals: 44,
    price: '$1,942.50',
    change: '0.02%',
    up: false,
    icon: (
      <span className="relative size-[28px] shrink-0 overflow-clip rounded-full">
        <img alt="" className="absolute top-[calc(50%+0.45px)] left-[calc(50%+0.34px)] h-[19.091px] w-[23.418px] -translate-1/2" src={tether} />
      </span>
    ),
  },
  {
    name: 'Binance Coin',
    signals: 36,
    price: '$1,246.12',
    change: '0.65%',
    up: true,
    icon: (
      <span className="relative size-[28px] shrink-0 overflow-clip">
        <img alt="" className="absolute top-[calc(50%+0.2px)] left-[calc(50%+0.2px)] size-[26px] -translate-1/2 object-cover" src={bnb} />
      </span>
    ),
  },
  {
    name: 'Solana',
    signals: 32,
    price: '$942.12',
    change: '0.29%',
    up: true,
    icon: (
      <span className="relative size-[28px] shrink-0 overflow-clip rounded-full border border-line bg-black">
        <img alt="" className="absolute top-1/2 left-1/2 h-[12px] w-[16px] -translate-1/2" src={solana} />
      </span>
    ),
  },
]

function Leaderboard() {
  return (
    <section className="flex w-full flex-col">
      <div className="flex items-center gap-[8px] pt-[20px] pr-[16px] pb-[8px] pl-[12px]">
        <h2 className="flex-1 text-[14px] leading-[1.4] font-medium text-white">Leaderboard</h2>
        <a href="#" className="group flex items-end gap-[4px] text-[14px] leading-[1.4] font-medium text-[#4a79ff]">
          Selengkapnya
          <span className="flex size-[20px] items-center justify-center">
            <img alt="" className="size-[13px] transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px" src={arrowUpRight} />
          </span>
        </a>
      </div>
      <ol className="flex w-full flex-col gap-[4px] py-[8px]">
        {LEADERS.map((l) => (
          <li
            key={l.name}
            className={`flex w-full items-center ${l.podium ? 'border-y border-white/4 bg-gradient-to-r from-[#292929] to-[rgba(28,28,28,0)]' : ''}`}
          >
            <span className="relative flex h-[52px] w-[56px] shrink-0 items-center px-[12px]">
              {l.podium && (
                <>
                  <img alt="" width="56" height="52" className="absolute inset-0 size-full" src={l.podium} />
                  <span aria-hidden className="absolute top-0 right-[0.2px] h-[52px] w-[16.297px]">
                    <span className="absolute inset-[-0.29%_-2.93%]">
                      <img alt="" className="block size-full max-w-none" src={l.edge} />
                    </span>
                  </span>
                </>
              )}
              <span className="relative font-bebas text-[20px] leading-none text-white">{l.rank}</span>
            </span>
            <span className="flex h-[52px] min-w-0 flex-1 items-center gap-[12px] pr-[20px] pl-[12px]">
              <img alt="" className={`size-[28px] shrink-0 rounded-full object-cover ${l.ring ? 'border border-line' : ''}`} src={l.avatar} />
              <span className="flex min-w-0 flex-1 items-center justify-between leading-[1.2] font-medium whitespace-nowrap text-white">
                <span className="font-geist text-[14px]">{l.name}</span>
                <span className="font-mono text-[12px] tabular-nums">{l.pnl}</span>
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function TopSignaled() {
  return (
    <section className="flex w-full flex-col border-t border-line">
      <div className="flex items-end gap-[8px] px-[16px] pt-[20px] pb-[16px] text-[14px] leading-[1.4]">
        <h2 className="flex-1 font-medium text-white">Paling banyak disignal</h2>
        <span className="font-geist font-medium tracking-[0.28px] text-muted uppercase">Price</span>
      </div>
      <ul className="flex w-full flex-col gap-[8px] px-[16px] pb-[16px]">
        {COINS.map((c) => (
          <li key={c.name} className="flex w-full items-center gap-[10px] py-[8px]">
            {c.icon}
            <span className="flex min-w-0 flex-1 flex-col gap-px leading-[1.4] whitespace-nowrap">
              <span className="font-geist text-[14px] font-medium text-white">{c.name}</span>
              <span className="font-geist text-[13px] text-muted">{c.signals} Signal</span>
            </span>
            <span className="flex flex-col items-end gap-[2px]">
              <span className="font-mono text-[14px] leading-[1.4] font-medium whitespace-nowrap text-white tabular-nums">{c.price}</span>
              <span className="flex items-center gap-[6px]">
                <span className="relative h-[6px] w-[8px]">
                  <span className={`absolute inset-[-42.69%_-53.34%_-91.33%_-53.02%] ${c.up ? '' : '-scale-y-100'}`}>
                    <img alt={c.up ? 'naik' : 'turun'} className="block size-full max-w-none" src={c.up ? triUp : triDown} />
                  </span>
                </span>
                <span className={`font-mono text-[13px] leading-none font-medium tracking-[0.26px] tabular-nums ${c.up ? 'text-[#37ff00]' : 'text-[#ff4848]'}`}>
                  {c.change}
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function RightRail() {
  return (
    <aside className="hidden w-[300px] shrink-0 flex-col self-stretch border-l border-line pl-px xl:flex">
      <Leaderboard />
      <TopSignaled />
    </aside>
  )
}

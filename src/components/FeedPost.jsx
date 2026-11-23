import Status from './Status.jsx'
import avatar from '../assets/avatar-32.png'
import dotSep from '../assets/dot-sep.svg'
import moreLine from '../assets/more-line.svg'
import texture from '../assets/texture.png'
import cardPixelsMask from '../assets/card-pixels-mask.svg'
import btcMask from '../assets/btc-mask.svg'
import btc from '../assets/btc.svg'
import arrowRight from '../assets/arrow-right-s-line-lg.svg'
import heart from '../assets/heart-fill.svg'
import chat from '../assets/chat-1-line.svg'
import share from '../assets/share.svg'

const SIDE = {
  long: { label: 'Long', className: 'bg-[rgba(93,238,115,0.1)] text-green-400' },
  short: { label: 'Short', className: 'bg-[rgba(177,0,0,0.1)] text-red-400' },
}

const actionButton =
  'flex items-center gap-[6px] rounded-full text-[14px] leading-[1.4] font-medium transition-[opacity,scale] duration-150 ease-out hover:opacity-80 active:scale-[0.96]'

function BitcoinIcon() {
  return (
    <span aria-hidden className="relative size-[20px] shrink-0 overflow-clip">
      <span
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px]"
        style={{ maskImage: `url("${btcMask}")` }}
      >
        <span className="absolute inset-[-8.3%_-16.6%_-24.9%_-16.6%]">
          <img alt="" className="block size-full max-w-none" src={btc} />
        </span>
      </span>
    </span>
  )
}

export default function FeedPost({ author, time, body, side, leverage, status, likes, comments }) {
  const s = SIDE[side]
  return (
    <article className="flex w-full flex-col gap-[20px] rounded-[4px]">
      <header className="flex w-full items-center gap-[10px] px-[12px]">
        <div className="flex min-w-0 flex-1 items-center gap-[10px]">
          <img alt="" className="size-[32px] shrink-0 rounded-full" src={avatar} />
          <p className="text-[14px] leading-[1.4] font-medium whitespace-nowrap text-white">{author}</p>
          <img alt="" className="size-[3px] shrink-0" src={dotSep} />
          <p className="text-[14px] leading-[1.4] whitespace-nowrap text-muted">{time}</p>
        </div>
        <button
          type="button"
          aria-label="Opsi lainnya"
          className="flex shrink-0 rounded-[8px] p-[6px] transition-[background-color] duration-150 ease-out hover:bg-white/5"
        >
          <img alt="" className="size-[16px]" src={moreLine} />
        </button>
      </header>

      <div className="flex w-full flex-col gap-[24px]">
        <p className="px-[12px] text-[14px] leading-[1.4] text-pretty text-white">{body}</p>

        <a
          href="#"
          className="group relative flex w-full items-center gap-[10px] overflow-clip border border-line p-[12px] shadow-[0px_1.66px_3.32px_0px_rgba(0,0,0,0.04),0px_1.66px_3.32px_0px_rgba(0,0,0,0.04)]"
        >
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[#111113] transition-colors duration-150 ease-out group-hover:bg-[#151518]" />
          <span
            aria-hidden
            className="absolute top-[calc(50%-44.23px)] left-[calc(50%+301.56px)] h-[177.228px] w-[626.174px] -translate-x-1/2 -translate-y-1/2 opacity-15 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.498px_42.242px] mask-size-[498.055px_181.102px]"
            style={{ maskImage: `url("${cardPixelsMask}")` }}
          >
            <span
              className="absolute inset-0 bg-size-[211.405px_211.405px] bg-top-left"
              style={{ backgroundImage: `url("${texture}")` }}
            />
          </span>

          <span className="relative flex min-w-0 flex-1 items-center gap-[24px]">
            <span className="flex shrink-0 items-center gap-[12px]">
              <BitcoinIcon />
              <span className="flex items-center gap-[8px] text-[14px] leading-[1.4] whitespace-nowrap">
                <span className="font-medium text-white">Bitcoin</span>
                <span className="font-medium text-white">/</span>
                <span className="text-muted">BTC</span>
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-[12px]">
              <span
                className={`flex items-center justify-center overflow-clip border border-white/20 px-[10px] py-[4px] font-mono text-[11px] leading-[1.4] font-medium tracking-[0.11px] uppercase shadow-[0px_0px_0px_1px_black] ${s.className}`}
              >
                {s.label}
              </span>
              <span className="text-[14px] leading-[1.4] whitespace-nowrap text-muted">{leverage}</span>
            </span>
          </span>

          <Status state={status} />
          <img alt="" className="relative size-[20px] shrink-0" src={arrowRight} />
          <span aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.12),inset_0px_-1.66px_1.66px_0px_rgba(0,0,0,0.12)]" />
        </a>
      </div>

      <footer className="flex w-full items-center gap-[8px] pt-[8px] pl-[12px]">
        <button type="button" aria-label={`Suka, ${likes}`} className={`${actionButton} pr-[8px] text-[red]`}>
          <img alt="" className="size-[16px]" src={heart} />
          <span className="tabular-nums">{likes}</span>
        </button>
        <button type="button" aria-label={`Komentar, ${comments}`} className={`${actionButton} px-[8px] text-muted`}>
          <img alt="" className="size-[16px]" src={chat} />
          <span className="tabular-nums">{comments}</span>
        </button>
        <button type="button" aria-label="Bagikan" className={`${actionButton} min-w-[32px] justify-center px-[8px]`}>
          <img alt="" className="size-[16px]" src={share} />
        </button>
      </footer>
    </article>
  )
}

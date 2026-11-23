import texture from '../assets/texture.webp'
import pixelsMask from '../assets/status-pixels-mask.svg'
import glowActive from '../assets/status-glow-active.webp'
import glowPending from '../assets/status-glow-pending.webp'
import glowExpired from '../assets/status-glow-expired.webp'

const VARIANTS = {
  active: {
    label: 'Active',
    glow: glowActive,
    glowLeft: 'left-[12px]',
    dot: 'linear-gradient(-49.91deg, rgb(0, 175, 0) 48.015%, rgb(214, 250, 209) 89.163%)',
    wash: 'from-[rgba(66,238,63,0)] to-[rgba(66,238,63,0.2)]',
  },
  pending: {
    label: 'Pending',
    glow: glowPending,
    glowLeft: 'left-[17px]',
    dot: 'linear-gradient(-49.91deg, rgb(255, 188, 44) 48.015%, rgb(255, 245, 224) 89.163%)',
    wash: 'from-[rgba(255,188,44,0)] to-[rgba(255,188,44,0.2)]',
  },
  // Home's signal cards: same chip, no glow bar in the design.
  running: {
    label: 'Running',
    dot: 'linear-gradient(-49.91deg, rgb(0, 175, 0) 48.015%, rgb(214, 250, 209) 89.163%)',
    wash: 'from-[rgba(66,238,63,0)] to-[rgba(66,238,63,0.2)]',
  },
  closed: {
    label: 'Ditutup',
    dot: 'linear-gradient(-49.91deg, rgb(0, 49, 184) 48.015%, rgb(70, 120, 255) 89.163%)',
    wash: 'from-[rgba(0,49,184,0)] to-[rgba(0,49,184,0.2)]',
  },
  expired: {
    label: 'Kadaluarsa',
    glow: glowExpired,
    glowLeft: 'left-[14px]',
    dot: 'linear-gradient(-49.91deg, rgb(110, 110, 110) 48.015%, rgb(255, 255, 255) 89.163%)',
    wash: 'from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.2)]',
  },
}

export default function Status({ state = 'active' }) {
  const v = VARIANTS[state]
  return (
    <span className="relative flex shrink-0 items-center justify-center gap-[8px] overflow-clip border border-white/20 bg-gradient-to-b from-[#121212] to-[#040404] px-[12px] py-[4px] shadow-[0px_0px_0px_1px_black]">
      {v.glow && (
        <span aria-hidden className={`absolute top-[7px] h-[9px] w-[3px] ${v.glowLeft}`}>
          <span className="absolute inset-[-3772.69%_-11318.06%]">
            <img alt="" className="block size-full max-w-none" src={v.glow} />
          </span>
        </span>
      )}
      <span
        aria-hidden
        className="absolute top-[calc(50%-30.68px)] left-[calc(50%-53.58px)] h-[87.196px] w-[308.077px] -translate-x-1/2 -translate-y-1/2 opacity-15 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17.118px_20.781px] mask-size-[245.043px_89.102px]"
        style={{ maskImage: `url("${pixelsMask}")` }}
      >
        <span
          className="absolute inset-0 bg-size-[104.01px_104.01px] bg-top-left"
          style={{ backgroundImage: `url("${texture}")` }}
        />
      </span>
      <span
        aria-hidden
        className="relative size-[10px] shrink-0 rounded-[2px] border border-white shadow-[0px_20.441px_20.441px_0px_rgba(0,0,0,0.26),0px_4.717px_11.007px_0px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: v.dot }}
      />
      <span className="relative text-[12px] leading-[1.4] font-medium whitespace-nowrap text-white">{v.label}</span>
      <span aria-hidden className={`absolute top-[-1px] left-[-1px] h-[27px] w-[28px] bg-gradient-to-l ${v.wash}`} />
    </span>
  )
}

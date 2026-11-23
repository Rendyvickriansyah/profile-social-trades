import traderAvatar from '../assets/trader-avatar.png'
import dividerVSm from '../assets/divider-v-sm.svg'
import dividerRow from '../assets/divider-row.svg'
import arrowRight from '../assets/arrow-right-line.svg'

const TRADERS = [
  { id: 1, name: 'Shadow Fox', active: 1, pending: 0 },
  { id: 2, name: 'Shadow Fox', active: 1, pending: 0 },
  { id: 3, name: 'Shadow Fox', active: 1, pending: 0 },
  { id: 4, name: 'Shadow Fox', active: 1, pending: 0 },
]

function Count({ color, children }) {
  return (
    <span className="flex items-center gap-[6px]">
      <span aria-hidden className="size-[4px]" style={{ backgroundColor: color }} />
      <span className="text-[12px] leading-[1.4] whitespace-nowrap text-muted tabular-nums">{children}</span>
    </span>
  )
}

export default function SubscribedTraders() {
  return (
    <section className="flex w-full flex-col rounded-[4px] border border-line bg-[#0f0f0f]">
      <h2 className="px-[16px] pt-[16px] pb-[8px] text-[14px] leading-[1.4] font-medium text-white">
        Trader yang kamu subscribe
      </h2>

      <ul className="flex w-full flex-col items-center">
        {TRADERS.map((t, i) => (
          <li key={t.id} className="flex w-full flex-col items-center">
            {i > 0 && (
              <span aria-hidden className="relative h-px w-[calc(100%-32px)]">
                <span className="absolute inset-[-50%_0]">
                  <img alt="" className="block size-full max-w-none" src={dividerRow} />
                </span>
              </span>
            )}
            <a href="#" className="flex w-full items-center justify-between px-[16px] py-[12px] transition-colors duration-150 ease-out hover:bg-white/[0.02]">
              <span className="flex items-center gap-[12px]">
                <span className="relative size-[32px] shrink-0 overflow-clip rounded-full border-[0.451px] border-white/36">
                  <img alt="" width="32" height="32" className="absolute top-[-0.45px] left-[-0.45px] size-[32px] max-w-none" src={traderAvatar} />
                </span>
                <span className="text-[12px] leading-[1.4] font-medium whitespace-nowrap text-white">{t.name}</span>
              </span>
              <span className="flex items-center gap-[14px]">
                <Count color="#03df54">{t.active} Aktif</Count>
                <span aria-hidden className="relative h-[12px] w-0">
                  <span className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block size-full max-w-none" src={dividerVSm} />
                  </span>
                </span>
                <Count color="#ffb124">{t.pending} Pending</Count>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="px-[16px] pt-[8px] pb-[16px]">
        <a
          href="#"
          className="group flex w-full items-center justify-center gap-[8px] overflow-clip border border-line bg-[#252525] py-[10px] pr-[8px] pl-[10px] shadow-[0px_0px_0px_1px_#0d0d0d] transition-[background-color,scale] duration-150 ease-out hover:bg-[#2c2c2c] active:scale-[0.98]"
        >
          <span className="font-mono text-[10px] leading-[1.4] font-medium tracking-[0.3px] whitespace-nowrap text-white uppercase">
            lihat semua
          </span>
          <img alt="" className="size-[16px] transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-[2px]" src={arrowRight} />
        </a>
      </div>
    </section>
  )
}

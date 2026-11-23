import calendar from '../assets/calendar-fill.svg'
import dividerV from '../assets/divider-v.svg'
import scoreRing from '../assets/score-ring.webp'

const STATS = [
  { label: 'Trader Disubscribe', value: 4 },
  { label: 'Sinyal Difollow', value: 20 },
  { label: 'Sinyal Berjalan', value: 12 },
]

// Reveal order on page load: the banner logo is 0, then name, badge, join date, stats.
const order = (i) => ({ '--i': i })

function StatDivider({ i }) {
  return (
    <div aria-hidden className="text-reveal flex flex-row items-center self-stretch" style={order(i)}>
      <div className="relative h-full w-0 shrink-0">
        <div className="absolute inset-[0_-0.5px]">
          <img alt="" className="block size-full max-w-none" src={dividerV} />
        </div>
      </div>
    </div>
  )
}

export default function ProfileHeader() {
  return (
    <div className="flex w-full flex-wrap items-end gap-x-[24px] gap-y-4 pl-[12px]">
      <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <h1 className="text-[18px] leading-[1.4] font-medium whitespace-nowrap text-white">
            <span className="text-reveal inline-block" style={order(1)}>Shadow</span>{' '}
            <span className="text-reveal inline-block" style={order(2)}>Fox</span>
          </h1>
          <span style={order(3)} className="text-reveal relative flex items-center justify-center rounded-[2px] border-[0.5px] border-line px-[4px] py-px">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2px]"
              style={{
                backgroundImage:
                  'linear-gradient(-17.74deg, rgba(0, 0, 0, 0) 11.61%, rgb(11, 11, 11) 97.944%), linear-gradient(-1.01deg, rgb(0, 0, 0) 34.778%, rgb(72, 120, 255) 122.64%)',
              }}
            />
            <span className="relative text-[10px] leading-[1.4] font-medium whitespace-nowrap text-[#7398ff] text-shadow-[0px_2px_7px_rgba(72,120,255,0.54)]">
              MASTER
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(72,120,255,0.38)]" />
          </span>
        </div>
        <div className="text-reveal flex items-center gap-[6px]" style={order(4)}>
          <img alt="" className="size-[12px] shrink-0" src={calendar} />
          <p className="text-[14px] leading-[1.4] text-muted">Bergabung Sejak 30 October 2026</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-[16px]">
        {STATS.map(({ label, value }, i) => (
          <div key={label} className="contents">
            <div className="text-reveal flex items-end gap-[8px]" style={order(5 + i)}>
              <span className="text-[14px] leading-[1.4] whitespace-nowrap text-muted">{label}</span>
              <span className="pb-[2px] font-mono text-[16px] leading-[1.1] font-medium tracking-[0.32px] text-white tabular-nums">
                {value}
              </span>
            </div>
            <StatDivider i={5 + i} />
          </div>
        ))}
        <div className="text-reveal flex items-end gap-[8px]" style={order(5 + STATS.length)}>
          <span className="text-[14px] leading-[1.4] whitespace-nowrap text-muted">Skor Saya</span>
          <span className="flex items-center gap-[8px]">
            <span className="font-bebas text-[18px] leading-[0.8] text-[#5dee73] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] text-shadow-[0px_0px_13px_rgba(93,238,115,0.4),0px_0px_113.466px_#5dee73,0px_0px_194.514px_#5dee73,0px_0px_339.542px_#5dee73]">
              87
            </span>
            <span aria-hidden className="relative size-[20px] shrink-0">
              <span className="absolute inset-[-1697.64%_-1697.71%]">
                <img alt="" className="block size-full max-w-none" src={scoreRing} />
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

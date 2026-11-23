import home from '../assets/home-4-fill.svg'
import barChart from '../assets/bar-chart-fill.svg'
import bookmark from '../assets/bookmark-3-fill.svg'
import userActive from '../assets/user-3-fill-active.svg'
import user from '../assets/user-3-fill.svg'
import logout from '../assets/logout-box-fill.svg'
import cornerTl from '../assets/corner-tl.svg'
import cornerTr from '../assets/corner-tr.svg'
import cornerBl from '../assets/corner-bl.svg'
import cornerBr from '../assets/corner-br.svg'
import arrowRightS from '../assets/arrow-right-s-line.svg'
import subAvatar1 from '../assets/sub-avatar-1.png'
import subAvatar2 from '../assets/sub-avatar-2.png'
import subAvatar3 from '../assets/sub-avatar-3.png'

const GENERAL = [
  { label: 'Home', icon: home },
  { label: 'Signal', icon: barChart },
  { label: 'Feeds', icon: bookmark },
  { label: 'Profile', icon: userActive, active: true },
]

const SUBSCRIPTIONS = [
  { name: 'Iron Drake', avatar: subAvatar1, unread: 1 },
  { name: 'Night Owl', avatar: subAvatar2 },
  { name: 'Wolf Trader', avatar: subAvatar3 },
  { name: 'Golden Trader', avatar: subAvatar3 },
  { name: 'Bronze Dealer', avatar: subAvatar3 },
]

function SectionHeader({ children }) {
  return (
    <div className="flex w-full items-center gap-[4px] px-[12px] text-subtle whitespace-nowrap">
      {children}
    </div>
  )
}

function Divider() {
  return (
    <div className="w-full py-[8px]">
      <div className="h-px w-full bg-line" />
    </div>
  )
}

function Corner({ src, className, rotate = '' }) {
  return (
    <span aria-hidden className={`absolute flex size-[3px] items-center justify-center ${className}`}>
      <span className={`relative size-[3px] flex-none ${rotate}`}>
        <span className="absolute inset-[-16.67%_0_0_-16.67%]">
          <img alt="" className="block size-full max-w-none" src={src} />
        </span>
      </span>
    </span>
  )
}

function NavItem({ label, icon, active }) {
  return (
    <a
      href="#"
      aria-current={active ? 'page' : undefined}
      className={`relative flex w-full items-center gap-[8px] px-[12px] py-[8px] font-geist text-[14px] leading-[1.4] tracking-[-0.14px] transition-colors duration-150 ease-out ${
        active
          ? 'border-[0.5px] border-line bg-white/8 text-white'
          : 'text-dim hover:text-white'
      }`}
    >
      <img alt="" className="size-[14px] shrink-0" src={icon} />
      <span className="min-w-0 flex-1">{label}</span>
      {active && (
        <>
          <Corner src={cornerTl} className="top-0 left-0" />
          <Corner src={cornerTr} className="top-0 right-[-0.5px]" rotate="rotate-90" />
          <Corner src={cornerBr} className="right-[-0.5px] bottom-[-0.5px]" rotate="rotate-180" />
          <Corner src={cornerBl} className="bottom-[-0.5px] left-[-0.5px]" rotate="-rotate-90" />
        </>
      )}
    </a>
  )
}

export default function Sidebar() {
  return (
    <aside className="hidden w-[212px] shrink-0 flex-col gap-[28px] self-stretch border-r border-line px-[16px] pt-[24px] pb-[8px] lg:flex">
      <nav className="flex w-full flex-col gap-[6px]">
        <div className="flex w-full flex-col gap-[6px]">
          <SectionHeader>
            <span className="font-mono text-[11px] leading-[1.4] tracking-[0.22px] uppercase">General</span>
          </SectionHeader>
          {GENERAL.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        <Divider />

        <div className="flex w-full flex-col gap-[6px]">
          <SectionHeader>
            <span className="font-mono text-[11px] leading-[1.4] tracking-[0.22px] uppercase">Subscriptions</span>
            <span className="font-geist text-[12px] leading-[1.4] font-medium">•</span>
            <span className="font-mono text-[11px] leading-[1.4] tracking-[0.22px] tabular-nums">20</span>
          </SectionHeader>
          {SUBSCRIPTIONS.map(({ name, avatar, unread }) => (
            <a
              key={name}
              href="#"
              className="flex w-full items-center gap-[12px] px-[12px] py-[8px] text-[14px] leading-[1.4] whitespace-nowrap text-muted transition-colors duration-150 ease-out hover:text-white"
            >
              <img alt="" width="24" height="24" className="size-[24px] shrink-0 rounded-full" src={avatar} />
              <span>{name}</span>
              {unread ? (
                <span
                  aria-label={`${unread} baru`}
                  className="flex size-[14px] items-center justify-center rounded-[7px] bg-[#ee3f3f] text-[10.889px] leading-[1.4] font-medium text-white tabular-nums"
                >
                  {unread}
                </span>
              ) : null}
            </a>
          ))}
          <a
            href="#"
            className="flex w-full items-center gap-[6px] px-[12px] py-[8px] text-[14px] leading-[1.4] whitespace-nowrap text-muted transition-colors duration-150 ease-out hover:text-white"
          >
            Lihat Lebih Banyak
            <img alt="" className="size-[16px]" src={arrowRightS} />
          </a>
        </div>

        <Divider />

        <NavItem label="Profile" icon={user} />
      </nav>

      <NavItem label="Logout" icon={logout} />
    </aside>
  )
}

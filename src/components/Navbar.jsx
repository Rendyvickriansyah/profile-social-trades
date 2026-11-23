import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.svg'
import logoWordmark from '../assets/logo-wordmark.svg'
import logoWordmarkHome from '../assets/home/logo-wordmark.svg'
import trophyLine from '../assets/trophy-line.svg'
import bell from '../assets/bell.svg'

const iconButton =
  'flex size-[40px] items-center justify-center rounded-[8px] border border-line p-[6px] transition-[background-color,scale] duration-150 ease-out hover:bg-white/5 active:scale-[0.96]'

// The two pages were designed with different navbar insets and actions:
// Home has a 264px logo column and only notifications, Profile adds the leaderboard.
const VARIANTS = {
  home: {
    logo: 'md:w-[264px] md:pl-[32px]',
    actions: 'md:pr-[16px]',
    wordmark: logoWordmarkHome,
    leaderboard: false,
    badge: 'top-[-3px] right-[-4px] size-[16px] font-mono text-[10px]',
  },
  profile: {
    logo: 'md:w-[312px] md:pl-[80px]',
    actions: 'md:pr-[62px]',
    wordmark: logoWordmark,
    leaderboard: true,
    badge: 'top-[-0.5px] right-[-0.5px] size-[11.5px] text-[8px]',
  },
}

export default function Navbar({ variant = 'profile' }) {
  const v = VARIANTS[variant]
  return (
    <header className="h-[64px] w-full border-b border-line bg-black">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between">
        <Link to="/" aria-label="TWS home" className={`flex h-full shrink-0 items-center pr-[24px] pl-4 ${v.logo}`}>
          <span className="relative inline-grid place-items-start">
            <img alt="" className="col-1 row-1 h-[23.739px] w-[24.882px]" src={logoMark} />
            <img alt="" className="col-1 row-1 mt-[5.31px] ml-[29.64px] h-[12.51px] w-[35.359px]" src={v.wordmark} />
          </span>
        </Link>

        <div className={`flex h-full shrink-0 items-center justify-end gap-[16px] pr-4 pl-[24px] md:w-[312px] ${v.actions}`}>
          {v.leaderboard && (
            <button type="button" aria-label="Leaderboard" className={iconButton}>
              <img alt="" className="size-[24px]" src={trophyLine} />
            </button>
          )}
          <button type="button" aria-label="Notifikasi, 2 belum dibaca" className={iconButton}>
            <span className="relative size-[24px]">
              <span className="absolute inset-[12.96%_12.95%_9.26%_12.97%]">
                <img alt="" className="block size-full" src={bell} />
              </span>
              <span
                className={`absolute flex items-center justify-center rounded-full border-[0.821px] border-black bg-red-500 leading-none font-medium text-white ${v.badge}`}
              >
                2
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

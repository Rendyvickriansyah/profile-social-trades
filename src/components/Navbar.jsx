import logoMark from '../assets/logo-mark.svg'
import logoWordmark from '../assets/logo-wordmark.svg'
import trophyLine from '../assets/trophy-line.svg'
import bell from '../assets/bell.svg'

const iconButton =
  'flex size-[40px] items-center justify-center rounded-[8px] border border-line p-[6px] transition-[background-color,scale] duration-150 ease-out hover:bg-white/5 active:scale-[0.96]'

export default function Navbar() {
  return (
    <header className="h-[64px] w-full border-b border-line bg-black">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between">
        <a href="#" aria-label="TWS home" className="flex h-full shrink-0 items-center pr-[24px] pl-4 md:w-[312px] md:pl-[80px]">
          <span className="relative inline-grid place-items-start">
            <img alt="" className="col-1 row-1 h-[23.739px] w-[24.882px]" src={logoMark} />
            <img alt="" className="col-1 row-1 mt-[5.31px] ml-[29.64px] h-[12.51px] w-[35.359px]" src={logoWordmark} />
          </span>
        </a>
  
        <div className="flex h-full shrink-0 items-center justify-end gap-[16px] pr-4 pl-[24px] md:w-[312px] md:pr-[62px]">
          <button type="button" aria-label="Leaderboard" className={iconButton}>
            <img alt="" className="size-[24px]" src={trophyLine} />
          </button>
          <button type="button" aria-label="Notifikasi, 2 belum dibaca" className={iconButton}>
            <span className="relative size-[24px]">
              <span className="absolute inset-[12.96%_12.95%_9.26%_12.97%]">
                <img alt="" className="block size-full" src={bell} />
              </span>
              <span className="absolute top-[-0.5px] right-[-0.5px] flex size-[11.5px] items-center justify-center rounded-full border-[0.821px] border-black bg-red-500 text-[8px] leading-none font-medium text-white">
                2
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

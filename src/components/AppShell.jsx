import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import RightRail from './home/RightRail.jsx'
import arrowLeft from '../assets/home/arrow-left-s-line.svg'

// Layout shared by Home and Signal: navbar, sidebar, main column, leaderboard rail.
// `inert` locks the page behind a modal.
export default function AppShell({ inert, children }) {
  return (
    <div inert={inert ? '' : undefined}>
      <Navbar variant="home" />
      <div className="relative mx-auto flex w-full max-w-[1440px] items-start">
        <Sidebar className="pr-[16px] pl-[20px]" />
        <button
          type="button"
          aria-label="Ciutkan sidebar"
          className="absolute top-[12px] left-[200px] z-10 hidden size-[24px] items-center justify-center rounded-full border border-line bg-[#161616] transition-[background-color,scale] duration-150 ease-out hover:bg-[#1f1f1f] active:scale-[0.96] lg:flex"
        >
          <img alt="" className="size-[16px]" src={arrowLeft} />
        </button>

        <main className="flex min-w-0 flex-1 flex-col pb-[32px]">{children}</main>

        <RightRail />
      </div>
    </div>
  )
}

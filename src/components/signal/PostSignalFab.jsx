// Floating shortcut for "Post Signal", shown once the header button has scrolled away.
// The plus is two bars, not an icon file, so each bar can grow out of the centre dot.
export default function PostSignalFab({ visible }) {
  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-40 md:right-6 md:bottom-6">
      <button
        type="button"
        aria-label="Post Signal"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        data-visible={visible}
        className="fab group relative flex size-[56px] items-center justify-center rounded-full border border-white text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgb(20, 71, 214) 1.4587%, rgb(32, 79, 211) 36.588%, rgb(76, 121, 242) 81.52%, rgb(119, 156, 255) 96.534%)',
          }}
        />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0px_-2.135px_2px_0px_rgba(255,255,255,0.25),inset_0px_3.202px_6.405px_0px_rgba(255,255,255,0.25)]" />

        <span className="fab-icon relative size-[24px]">
          {/* Same geometry as add-line.svg: 1.33 × 9.33 bars on a 16px grid. */}
          <svg viewBox="0 0 16 16" fill="currentColor" className="block size-full">
            <circle className="fab-dot" cx="8" cy="8" r="1.5" />
            <g className="fab-plus">
              <rect className="fab-bar-x" x="3.333" y="7.333" width="9.333" height="1.333" rx="0.667" />
              <rect className="fab-bar-y" x="7.333" y="3.333" width="1.333" height="9.333" rx="0.667" />
            </g>
          </svg>
        </span>

        <span
          aria-hidden
          className="fab-label absolute top-1/2 right-[calc(100%+12px)] -translate-y-1/2 rounded-[4px] border border-line bg-[#161616] px-[10px] py-[6px] text-[13px] leading-[1.4] font-medium whitespace-nowrap text-white"
        >
          Post Signal
        </span>
      </button>
    </div>
  )
}

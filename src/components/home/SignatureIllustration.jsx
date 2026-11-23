import windowDot from '../../assets/home/window-dot.svg'
import backdrop from '../../assets/home/signature-backdrop.svg'
import baseline from '../../assets/home/signature-baseline.svg'
import pen from '../../assets/home/pen.svg'
import penSpark from '../../assets/home/pen-spark.svg'

// The signature from the design, in its own 129.6 × 60.7 coordinate space. The ink
// is drawn along it and the pen rides the same path, so the nib stays on the ink.
const SIGNATURE =
  'M1.80312 49.4177C12.0193 11.4724 30.7491 -7.50023 37.5599 6.29805C44.3707 21.8211 17.1274 51.1425 27.3437 58.0416C37.5599 64.9407 49.4788 26.9955 63.1004 20.0963C73.3166 14.922 66.5058 40.7938 80.1274 37.3442C93.7491 33.8946 97.1545 16.6468 107.371 20.0963C115.884 23.5459 114.181 33.8946 127.803 26.9955'

// Nib tip inside pen.svg (190 × 36.4): the point that sits on the path, and the pivot for its tilt.
const NIB = { x: 19.2154, y: 18.2186 }

export default function SignatureIllustration({ signed }) {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 left-1/2 flex h-[208px] w-[288px] -translate-1/2 flex-col gap-[4px] rounded-[12px] border border-white bg-[rgba(29,29,29,0.36)] p-[4px] shadow-[0px_71.231px_10.017px_rgba(0,0,0,0.01),0px_45.632px_9.182px_rgba(0,0,0,0.05),0px_25.599px_7.791px_rgba(0,0,0,0.17),0px_11.13px_5.565px_rgba(0,0,0,0.29),0px_2.782px_3.061px_rgba(0,0,0,0.34),0px_-8.653px_13.52px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center pl-[2px]">
        {[0, 1, 2].map((i) => (
          <img key={i} alt="" className="h-[12.326px] w-[14.489px]" src={windowDot} />
        ))}
      </div>

      <div data-signed={signed} className="relative min-h-px w-full flex-1 rounded-[8px] border border-line bg-black shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]">
        <img alt="" className="absolute top-[calc(50%-9.12px)] left-1/2 h-[123px] w-[130px] -translate-1/2" src={backdrop} />
        <p className="absolute top-[149.22px] left-[calc(50%-55px)] font-mono text-[12.48px] leading-[1.4] font-medium tracking-[0.3744px] whitespace-nowrap text-muted uppercase">
          fatah abdillah
        </p>
        <div className="absolute top-[calc(76.69%+0.53px)] left-1/2 h-px w-[248px] -translate-x-1/2">
          <span className="absolute inset-[-0.5px_-0.2%]">
            <img alt="" className="block size-full max-w-none" src={baseline} />
          </span>
        </div>

        {/* Signature space, positioned where the design places the ink. */}
        <div className="absolute top-[69.36px] left-[71.16px] h-[60.679px] w-[129.606px]">
          <svg width="129.606" height="60.679" viewBox="0 0 129.606 60.679" fill="none" className="absolute inset-0 overflow-visible">
            <defs>
              <linearGradient id="signature-ink" x1="1.80312" y1="1.80254" x2="127.803" y2="1.80254" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A9C0FF" />
                <stop offset="1" stopColor="#4F7CFF" />
              </linearGradient>
            </defs>
            <path
              className="signature-ink"
              d={SIGNATURE}
              pathLength="1"
              stroke="url(#signature-ink)"
              strokeWidth="3.60533"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="signature-pen absolute top-0 left-0 size-0" style={{ offsetPath: `path("${SIGNATURE}")` }}>
            <img
              alt=""
              className="absolute h-[36.435px] w-[190.017px] max-w-none rotate-[-40.48deg] drop-shadow-[0px_11px_5.5px_rgba(0,0,0,0.29)]"
              style={{ left: -NIB.x, top: -NIB.y, transformOrigin: `${NIB.x}px ${NIB.y}px` }}
              src={pen}
            />
            <span className="absolute top-[-34.38px] left-[21.5px] h-[16.5px] w-[13.5px]">
              <span className="absolute inset-[-1.92%_-2.87%]">
                <img alt="" className="block size-full max-w-none" src={penSpark} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

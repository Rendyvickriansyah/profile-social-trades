import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SignatureIllustration from './SignatureIllustration.jsx'
import texture from '../../assets/texture.webp'
import pixelsMask from '../../assets/home/modal-pixels-mask.svg'
import glow from '../../assets/home/modal-glow.webp'

// Required consent: no close button, Escape or backdrop dismissal. The only way out is agreeing.
export default function RiskConsentModal({ onAccept }) {
  const [agreed, setAgreed] = useState(false)
  const [closing, setClosing] = useState(false)
  const panelRef = useRef(null)
  const titleId = useId()
  const bodyId = useId()

  useEffect(() => {
    // Focus the dialog itself: screen readers announce it, and no focus ring lands on
    // the checkbox before the user has done anything.
    panelRef.current.focus()
    const root = document.documentElement
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = ''
    }
  }, [])

  return createPortal(
    <div data-closing={closing || undefined} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div aria-hidden className="modal-overlay absolute inset-0 bg-black/40" />

      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className="modal-panel relative flex max-h-full w-full max-w-[500px] flex-col overflow-y-auto outline-none rounded-[8px] border border-line bg-[#0f0f0f] shadow-[0px_1.66px_3.32px_0px_rgba(0,0,0,0.04),inset_0px_-1.66px_1.66px_0px_rgba(0,0,0,0.12),inset_0px_1.66px_1.66px_0px_rgba(255,255,255,0.25)]"
        onAnimationEnd={(e) => closing && e.animationName === 'modal-out' && onAccept()}
      >
        <div className="relative h-[280px] w-full shrink-0 overflow-clip">
          <div
            aria-hidden
            className="absolute top-[-8.89px] left-[calc(50%+3.82px)] h-[429.701px] w-[992.67px] -translate-x-1/2 opacity-15 mask-alpha mask-no-clip mask-no-repeat mask-position-[277.794px_-4.111px] mask-size-[437.718px_437.719px]"
            style={{ maskImage: `url("${pixelsMask}")` }}
          >
            <div className="absolute inset-0 bg-size-[587.838px_587.838px] bg-top-left" style={{ backgroundImage: `url("${texture}")` }} />
          </div>
          <div
            aria-hidden
            className="absolute top-[166.89px] left-[calc(50%-14.79px)] h-[60.486px] w-[5.148px] mask-alpha mask-no-clip mask-no-repeat mask-position-[-199.931px_-179.889px] mask-size-[437.718px_437.719px]"
            style={{ maskImage: `url("${pixelsMask}")` }}
          >
            <span className="absolute inset-[-373.4%_-4387.06%]">
              <img alt="" className="block size-full max-w-none" src={glow} />
            </span>
          </div>

          <SignatureIllustration signed={agreed} />

          <div aria-hidden className="absolute bottom-[-0.5px] left-0 h-[67px] w-full bg-gradient-to-t from-[#0f0f0f] from-[10.417%] to-[rgba(15,15,15,0)] to-[94.531%]" />
        </div>

        <div className="flex w-full flex-col gap-[36px] px-[24px] pb-[24px]">
          <div className="flex w-full flex-col gap-[24px]">
            <div className="flex w-full flex-col gap-[12px] leading-[1.4]">
              <h2 id={titleId} className="text-[18px] font-medium text-white">
                Pernyataan Risiko &amp; Tanggung Jawab
              </h2>
              <p id={bodyId} className="text-[16px] text-muted">
                Social Trades adalah bahan belajar dari sinyal trader dengan saldo simulasi 10.000. Kami tidak mengelola
                dana Anda, jadi trading menggunakan uang sungguhan dan risikonya tanggung jawab Anda.
              </p>
            </div>

            <label className="flex cursor-pointer items-center gap-[12px]">
              <span className="relative size-[20px] shrink-0">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer absolute inset-0 cursor-pointer appearance-none rounded-[4px] border border-line bg-[#0a0a0a] transition-[background-color,border-color] duration-150 ease-out checked:border-brand checked:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                />
                <svg aria-hidden viewBox="0 0 20 20" fill="none" className="checkbox-mark pointer-events-none absolute inset-0 size-full">
                  <path d="M5.5 10.5l3 3 6-7" pathLength="1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[16px] leading-[1.4] text-white">Saya mengerti dan menyetujui pernyataan risiko di atas.</span>
            </label>
          </div>

          <button
            type="button"
            disabled={!agreed || closing}
            onClick={() => setClosing(true)}
            className="relative flex h-[44px] w-full items-center justify-center rounded-[4px] border border-white text-[16px] leading-[1.4] font-medium text-white drop-shadow-[0px_14px_10px_rgba(42,98,255,0.12)] transition-[opacity,scale] duration-200 ease-out enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(106.93deg, rgb(20, 71, 214) 1.4587%, rgb(32, 79, 211) 36.588%, rgb(76, 121, 242) 81.52%, rgb(119, 156, 255) 96.534%)',
            }}
          >
            Saya Mengerti
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.135px_2px_0px_rgba(255,255,255,0.25),inset_0px_3.202px_6.405px_0px_rgba(255,255,255,0.25)]" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

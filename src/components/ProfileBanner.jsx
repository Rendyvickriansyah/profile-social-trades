import { useEffect, useRef, useState } from 'react'
import bannerLight from '../assets/banner-light.webp'
import bannerPixelsMask from '../assets/banner-pixels-mask.svg'
import texture from '../assets/texture.webp'
import wave1 from '../assets/wave-1.avif'
import wave2 from '../assets/wave-2.avif'
import wave3 from '../assets/wave-3.avif'
import wave4 from '../assets/wave-4.avif'
import wave5 from '../assets/wave-5.avif'
import bannerLogoMark from '../assets/banner-logo-mark.svg'
import bannerLogoTws from '../assets/banner-logo-tws.svg'
import avatar from '../assets/avatar-72.png'
import partnerMark from '../assets/partner-mark.svg'

// Left tip of the leaf-shaped gradient, in banner-stage coordinates.
// Every layer grows out of this point.
const WAVE_ORIGIN = '374px 202px'

// Layer 5 is the solid body; 1–4 are the plus-lighter highlight bands,
// each one thinner than the last. They bloom out in that order.
const WAVES = [
  { src: wave5, delay: 0, blend: '', box: 'left-[369.52px] top-[-107px] h-[591.969px] w-[1575.236px]', size: 'h-[1565.894px] w-[565.566px]', inset: 'inset-0' },
  { src: wave1, delay: 70, blend: 'mix-blend-plus-lighter', box: 'left-[369.52px] top-[-107px] h-[591.969px] w-[1575.236px]', size: 'h-[1565.894px] w-[565.566px]', inset: 'inset-[-2.56%_-7.1%]' },
  { src: wave2, delay: 140, blend: 'mix-blend-plus-lighter', box: 'left-[370.48px] top-[-50.26px] h-[478.487px] w-[1573.316px]', size: 'h-[1565.894px] w-[452.068px]', inset: 'inset-[-2.56%_-8.88%]' },
  { src: wave3, delay: 210, blend: 'mix-blend-plus-lighter', box: 'left-[371.44px] top-[6.39px] h-[365.197px] w-[1571.4px]', size: 'h-[1565.894px] w-[338.762px]', inset: 'inset-[-2.56%_-11.85%]' },
  { src: wave4, delay: 280, blend: 'mix-blend-plus-lighter', box: 'left-[372.42px] top-[64px] h-[249.98px] w-[1569.451px]', size: 'h-[1565.894px] w-[223.529px]', inset: 'inset-[-2.56%_-17.97%]' },
]

function Wave({ src, delay, blend, box, size, inset, onDone }) {
  return (
    // The animated wrapper carries the blend mode: a transformed element is its
    // own stacking context, so blending on the inner image would stop mixing
    // with the layers underneath.
    <div
      aria-hidden
      className={`banner-wave absolute inset-0 ${blend}`}
      style={{ '--wave-origin': WAVE_ORIGIN, '--wave-delay': `${delay}ms` }}
      onAnimationEnd={onDone && ((e) => e.animationName === 'wave-grow' && onDone())}
    >
      <div className={`absolute flex items-center justify-center ${box}`}>
        <div className="flex-none rotate-[-90.97deg]">
          <div className={`relative ${size}`}>
            <div className={`absolute ${inset}`}>
              <img alt="" decoding="async" className="block size-full max-w-none" src={src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProfileBanner() {
  const stageRef = useRef(null)
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const images = [...stageRef.current.querySelectorAll('img')]
    let frame
    let cancelled = false
    // Start one frame after the first paint, so the page's initial raster doesn't
    // land on the opening of the motion. A failed decode still lets it play.
    Promise.allSettled(images.map((img) => img.decode())).then(() => {
      if (cancelled) return
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setPhase('playing'))
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [])

  const lastWave = WAVES.length - 1

  return (
    <div className="relative h-[180px] w-full">
      <div className="relative size-full overflow-clip border border-line bg-black">
        {/* Stage keeps the artwork in design coordinates (1176 × 180) and left-anchored. */}
        <div ref={stageRef} data-phase={phase} className="absolute top-0 left-0 h-[180px] w-[1176px]">
          <div className="banner-light absolute top-[221.63px] left-[calc(50%+152.42px)] flex h-[1258.281px] w-[3310.289px] -translate-x-1/2 items-center justify-center mix-blend-luminosity">
            <div className="flex-none rotate-165">
              {/* Pre-blurred (40px) bitmap with a 120px halo baked in on each side. */}
              <img alt="" width="3556" height="654" decoding="async" className="pointer-events-none block h-[654.122px] w-[3556.1px] max-w-none" src={bannerLight} />
            </div>
          </div>

          <div
            aria-hidden
            className="absolute top-[-226.09px] left-[calc(50%+192.71px)] h-[1000.214px] w-[3130.114px] -translate-x-1/2 opacity-15 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[167.348px_-100.906px] mask-size-[2185px_1612.953px]"
            style={{ maskImage: `url("${bannerPixelsMask}")` }}
          >
            <div
              className="absolute inset-0 bg-size-[528.7078857421875px_528.7078857421875px] bg-top-left"
              style={{ backgroundImage: `url("${texture}")` }}
            />
          </div>
          <div
            aria-hidden
            className="absolute top-[calc(50%+214.08px)] left-[-437.44px] h-[1698.933px] w-[2185px] -translate-y-1/2 bg-brand mix-blend-overlay mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-179.557px_218.391px] mask-size-[2185px_1612.953px]"
            style={{ maskImage: `url("${bannerPixelsMask}")` }}
          />

          {WAVES.map((wave, i) => (
            <Wave key={wave.src} {...wave} onDone={i === lastWave ? () => setPhase('done') : undefined} />
          ))}

          <div className="absolute top-[calc(50%-10.82px)] left-[calc(50%-402.51px)] flex -translate-x-1/2 -translate-y-1/2 items-start gap-[10.966px]">
            <img alt="" className="block h-[29.799px] w-[30.019px] shrink-0" src={bannerLogoMark} />
            <div className="flex flex-col items-start gap-[4.985px]">
              <img alt="TWS" className="block h-[15.37px] w-[44.494px]" src={bannerLogoTws} />
              <p className="bg-gradient-to-b from-white to-[#5a5a5a] bg-clip-text text-center text-[13px] leading-[1.4] tracking-[2.6px] whitespace-nowrap text-transparent">
                SOCIAL TRADES
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[132px] left-[60px] flex flex-col items-center">
        <img alt="Shadow Fox" className="relative mb-[-15px] size-[72px] rounded-full" src={avatar} />
        <div className="relative flex items-center justify-center gap-[4px] rounded-[2px] border-[0.5px] border-line px-[4px] py-px">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2px]"
            style={{
              backgroundImage:
                'linear-gradient(-11.72deg, rgba(0, 0, 0, 0) 11.61%, rgb(11, 11, 11) 97.944%), linear-gradient(-0.65deg, rgb(0, 0, 0) 34.778%, rgb(0, 186, 254) 122.64%)',
            }}
          />
          <img alt="" className="relative size-[10px]" src={partnerMark} />
          <p className="relative bg-gradient-to-b from-[#4dd0ff] to-black bg-clip-text text-[11px] leading-[1.4] tracking-[1.43px] whitespace-nowrap text-transparent text-shadow-[0px_2px_7px_rgba(0,74,100,0.54)]">
            PARTNER
          </p>
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(0,187,255,0.41)]" />
        </div>
      </div>
    </div>
  )
}

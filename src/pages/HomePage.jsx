import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import BalanceChart from '../components/home/BalanceChart.jsx'
import SignalSection from '../components/home/SignalSection.jsx'
import RightRail from '../components/home/RightRail.jsx'
import RiskConsentModal from '../components/home/RiskConsentModal.jsx'
import arrowLeft from '../assets/home/arrow-left-s-line.svg'

const CONSENT_KEY = 'tws.riskConsent'

// Storage can be unavailable (private mode, blocked site data). Then the modal shows
// on every visit, which is the safe side for a consent prompt.
function hasConsented() {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

function rememberConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, 'accepted')
  } catch {
    // Not persisted; the prompt returns next visit.
  }
}

export default function HomePage() {
  const [needsConsent, setNeedsConsent] = useState(() => !hasConsented())

  const accept = () => {
    rememberConsent()
    setNeedsConsent(false)
  }

  return (
    <div className="min-h-dvh overflow-x-clip bg-black">
      {/* inert keeps focus and clicks inside the consent modal while it's open. */}
      <div inert={needsConsent ? '' : undefined}>
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

          <main className="flex min-w-0 flex-1 flex-col pb-[32px]">
            <h1 className="px-4 py-[24px] text-[18px] leading-[1.4] font-medium text-white md:pr-[62px] md:pl-[32px]">
              Hello Fatah Abdillah Alwi
            </h1>
            <BalanceChart />
            <SignalSection />
          </main>

          <RightRail />
        </div>
      </div>

      {needsConsent && <RiskConsentModal onAccept={accept} />}
    </div>
  )
}

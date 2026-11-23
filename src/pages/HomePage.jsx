import { useState } from 'react'
import AppShell from '../components/AppShell.jsx'
import BalanceChart from '../components/home/BalanceChart.jsx'
import SignalSection from '../components/home/SignalSection.jsx'
import RiskConsentModal from '../components/home/RiskConsentModal.jsx'

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
      <AppShell inert={needsConsent}>
        <h1 className="px-4 py-[24px] text-[18px] leading-[1.4] font-medium text-white md:pr-[62px] md:pl-[32px]">
          Hello Fatah Abdillah Alwi
        </h1>
        <BalanceChart />
        <SignalSection />
      </AppShell>

      {needsConsent && <RiskConsentModal onAccept={accept} />}
    </div>
  )
}

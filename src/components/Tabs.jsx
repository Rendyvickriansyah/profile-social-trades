import { useLayoutEffect, useRef, useState } from 'react'

// The active style is drawn once, full width, behind the tabs and clipped down to
// the selected tab. Switching tabs transitions the clip, so the gradient and the
// blue underline slide across together instead of jumping.
export default function Tabs({ tabs, value, onChange }) {
  const listRef = useRef(null)
  const [clip, setClip] = useState(null)

  useLayoutEffect(() => {
    const list = listRef.current
    const measure = () => {
      const tab = list.querySelector('[aria-selected="true"]')
      const left = tab.offsetLeft
      const right = list.clientWidth - left - tab.offsetWidth
      setClip(`inset(0 ${right}px 0 ${left}px)`)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={listRef} role="tablist" className="relative flex w-full items-center border-b border-line">
      {clip && (
        <div
          aria-hidden
          // Mounting with the clip already set means the first paint doesn't animate.
          className="pointer-events-none absolute inset-0 -bottom-px border-b border-brand bg-gradient-to-b from-[rgba(42,98,255,0)] from-[66.477%] to-brand to-[128.79%] transition-[clip-path] duration-250 ease-in-out"
          style={{ clipPath: clip }}
        />
      )}
      {tabs.map((tab) => {
        const selected = tab === value
        return (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={selected}
            onClick={() => onChange(tab)}
            className={`relative p-[12px] text-center text-[14px] leading-[1.4] whitespace-nowrap transition-colors duration-150 ease-out ${
              selected ? 'font-medium text-white' : 'text-muted hover:text-white'
            }`}
          >
            {/* The hidden medium-weight copy reserves the width, so the tab doesn't
                resize when its weight changes on selection. */}
            <span className="grid">
              <span aria-hidden className="invisible col-1 row-1 font-medium">
                {tab}
              </span>
              <span className="col-1 row-1">{tab}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

import texture from '../assets/texture.webp'
import pixelsMask from '../assets/discord-pixels-mask.svg'
import bloom from '../assets/discord-bloom.svg'
import discordLogo from '../assets/discord-logo.svg'
import arrowUpRight from '../assets/arrow-right-up-line.svg'
import bottomLine from '../assets/discord-bottom-line.svg'

export default function DiscordNote() {
  return (
    <section className="relative h-[140px] w-full overflow-clip rounded-[4px] border border-line bg-black">
      <div
        aria-hidden
        className="absolute top-[calc(50%-37.4px)] left-[calc(50%+78.22px)] h-[201.05px] w-[710.34px] -translate-x-1/2 -translate-y-1/2 opacity-15 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.047px_42.922px] mask-size-[565px_205.445px]"
        style={{ maskImage: `url("${pixelsMask}")` }}
      >
        <div
          className="absolute inset-0 bg-size-[239.82px_239.82px] bg-top-left"
          style={{ backgroundImage: `url("${texture}")` }}
        />
      </div>
      <div aria-hidden className="absolute top-[-50px] right-[-77px] h-[336px] w-[183px]">
        <div className="absolute inset-[-4.22%_-7.75%]">
          <img alt="" className="block size-full max-w-none" src={bloom} />
        </div>
      </div>

      <div className="absolute top-[-1px] left-[-1px] flex h-[140px] flex-col items-start justify-between p-[12px]">
        <div className="flex flex-col items-start gap-[8px]">
          <span className="flex items-center justify-center gap-[6px] overflow-clip border border-white/20 bg-[rgba(93,238,115,0.1)] px-[10px] py-[4px] shadow-[0px_0px_0px_1px_black]">
            <span aria-hidden className="size-[4px] bg-green-400" />
            <span className="font-mono text-[10px] leading-[1.4] font-medium tracking-[0.1px] whitespace-nowrap text-green-400 uppercase">
              terhubung ke discord
            </span>
          </span>
          <p className="w-[153px] text-[12px] leading-[1.4] text-muted">
            Nama, foto, dan cover mengikuti akun Discord kamu.
          </p>
        </div>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[4px] transition-opacity duration-150 ease-out hover:opacity-80"
        >
          <span className="bg-gradient-to-r from-[rgba(120,156,255,0.98)] via-[#3b6ef9] via-[27.885%] to-brand bg-clip-text text-[12px] leading-[1.4] font-medium whitespace-nowrap text-transparent">
            Ubah di Discord
          </span>
          <img alt="" className="size-[12px]" src={arrowUpRight} />
        </a>
      </div>

      <img alt="" aria-hidden className="absolute top-1/2 left-[233px] h-[72px] w-[95px] -translate-y-1/2" src={discordLogo} />
      <div aria-hidden className="absolute bottom-[-1px] left-1/2 h-0 w-[260px] -translate-x-1/2">
        <div className="absolute inset-[-1px_0]">
          <img alt="" className="block size-full max-w-none" src={bottomLine} />
        </div>
      </div>
    </section>
  )
}

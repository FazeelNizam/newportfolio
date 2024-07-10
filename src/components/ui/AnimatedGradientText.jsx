import { cn } from '../../utils/cn'

export default function AnimatedGradientText({ children, className }) {
  return (
    <div
      className={cn(
        'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-2 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40 md:py-1 sm:py-0.5',
        className
      )}
    >
      <div
        // className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#9100f9]/50 via-[#9c40ff]/50 to-[#0f0766]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#9100f9]/50 via-[#0f0766]/50 to-[#9100f9]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />
      {children}
    </div>
  )
}

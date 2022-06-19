interface EaseOutArgs {
  start: number
  end: number
  elapsed: number
  durationInMilliSec: number
}

const easeOut = {
  cubic({ start, end, elapsed, durationInMilliSec }: EaseOutArgs) {
    const progress = elapsed / durationInMilliSec - 1
    return (end - start) * progress ** 3 + end
  },
  quint({ start, end, elapsed, durationInMilliSec }: EaseOutArgs) {
    const progress = elapsed / durationInMilliSec
    return start + (end - start) * (1 - (1 - progress) ** 5)
  },
}

export default easeOut

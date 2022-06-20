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
  exponential({ start, end, elapsed, durationInMilliSec }: EaseOutArgs) {
    const progress = elapsed / durationInMilliSec
    if (progress >= 1) {
      return end
    }
    return (end - start) * (1 - 2 ** (-10 * progress)) + start
  },
}

export default easeOut

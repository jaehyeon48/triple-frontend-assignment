type EaseOutOptions = 'cubic' | 'exponential'

export interface CountUpProps {
  start?: number
  end: number
  durationInMilliSec?: number
  easeOutOption?: EaseOutOptions
  precision?: number
}

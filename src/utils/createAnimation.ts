export interface ICreateAnimation {
  from?: number // 起始值
  to: number // 结束值
  totalMs?: number // 动画执行总时长
  duration?: number // 动画间隔时长
  onUpdate?: (value: number) => void // 动画变化的回调
  onEnd?: () => void // 动画介绍的回调
}

export default function createAnimation(config: ICreateAnimation) {
  let { from = 0, to, totalMs = 1000, duration = 15, onUpdate, onEnd } = config

  const count = Math.floor(totalMs / duration) // 动画执行的总次数
  const step = (to - from) / count // 每次变化的值
  const timer = setInterval(() => {
    from += step
    if (from >= to) {
      from = to
      clearInterval(timer)
      onEnd && onEnd()
    }
    onUpdate && onUpdate(from)
  }, duration)
}

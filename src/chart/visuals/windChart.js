import { select } from 'd3'
import fillClip from './defs/fillClip'
import fill from './fill'
import weekDays from './weekDays'
import xAxis from './xAxis'
import xGrid from './xGrid'
import yGrid from './yGrid'
import hoverOverlay from './hoverOverlay'
import line from './line'

import hoverGuide from './hoverGuide'
import hoverTarget from './hoverTarget'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvasNode, data, visualizations) => {
  const { dimensions, scales, ceilings } = visualizations
  const canvas = select(canvasNode)

  const hoverEventHandlers = []
  const subscribeToHoverEvents = handler => hoverEventHandlers.push(handler)

  fillClip(canvas, dimensions, scales, data)
  fill(canvas, dimensions, scales, ceilings, subscribeToHoverEvents)

  xGrid(canvas, dimensions, scales)
  yGrid(canvas, dimensions, scales, ceilings)
  line(canvas, dimensions, scales, data, subscribeToHoverEvents)

  hoverOverlay(canvas, dimensions, subscribeToHoverEvents)

  weekDays(canvas, dimensions, scales)
  xAxis(canvas, dimensions, scales, subscribeToHoverEvents)

  hoverGuide(canvas, dimensions, scales, data, ceilings, subscribeToHoverEvents)

  hoverTarget(canvas, dimensions, scales, hoverEventHandlers)
}

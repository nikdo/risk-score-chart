import { pointer, range, bisect } from 'd3'
import { d3AxisOffset } from './constants'

// Based on https://stackoverflow.com/a/40574104/5763764
// Haven't found any other way how to get tick positions from a point scale.
const getPointScaleTickPositions = scale => {
  const [start, stop] = scale.range()
  return range(start, stop, scale.step())
    // Last tick has to be added because range function excludes it.
    .concat([stop])
    .map(pos => pos + d3AxisOffset)
}

const getClosestValueIndex = (array, value) => {
  const r = bisect(array, value, 1)
  const l = r - 1
  return value - array[l] < array[r] - value ? l : r
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales, eventHandlers) => {
  const hourTickPositions = getPointScaleTickPositions(scales.x)
  const initialIndex = hourTickPositions.length - 1
  let selectedIndex = initialIndex
  const reset = () =>
    eventHandlers.forEach(handler => handler.onValueHover
      && handler.onValueHover(hourTickPositions[initialIndex], initialIndex))

  canvas.append('rect')
    .attr('class', 'hover-target')
    .attr('width', dimensions.w)
    .attr('height', dimensions.h)
    .on('mouseout', () => {
      reset()
    })
    .on('mousemove', function (e) {
      const newIndex = getClosestValueIndex(hourTickPositions, pointer(e)[0])
      if (newIndex !== selectedIndex) {
        selectedIndex = newIndex
        const x = hourTickPositions[selectedIndex]
        eventHandlers.forEach(handler => handler.onValueHover && handler.onValueHover(x, selectedIndex))
      }
    })
  reset()
}

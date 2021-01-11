import { lineHeight } from './constants'
import hoverValueTooltip from './hoverValueTooltip'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales, data, ceilings, subscribeToHoverEvents) => {
  const hoverGuide = canvas.append('g')
    .attr('class', 'hover-guide')
    .style('display', 'none')

  const line = hoverGuide.append('line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', dimensions.h)

  const value = hoverGuide.append('g')
    .attr('class', 'value')

  hoverValueTooltip(value, scales, data, ceilings, subscribeToHoverEvents)

  subscribeToHoverEvents({
    onValueHover: (x, i) => {
      const y = scales.y(data[i].body)
      hoverGuide
        .style('display', null)
        .attr('transform', `translate(${x}, 0)`)
      line.attr('y1', y)
      value.attr('transform', `translate(0, ${y})`)
    }
  })
}

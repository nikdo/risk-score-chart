import { axisBottom } from 'd3'
import { lineHeight } from './constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales, subscribeToHoverEvents) => {
  const axis = axisBottom()
    .scale(scales.x)
    .tickValues(scales.x.domain().filter(d => d.format('ddd') === 'Mon'))
    .tickSize(0)
    .tickFormat(d => d.format('D.M.'))

  const element = canvas.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${dimensions.h})`)
    .call(axis)
    .attr('font-size', null)
    .attr('font-family', null)

  const labels = element.selectAll('text')
    .attr('y', lineHeight)
    .attr('x', 0)
    .attr('dy', 0)
    .attr('alignment-baseline', 'middle')

  subscribeToHoverEvents({
    onValueHover: () => labels.attr('display', 'none'),
    onMouseOut: () => labels.attr('display', null)
  })
}

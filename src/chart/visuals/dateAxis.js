import { axisBottom } from 'd3'
import { lineHeight } from './constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales) => {
  const axis = axisBottom()
    .scale(scales.x)
    .tickValues(scales.x.domain().filter(d => d.format('DD').match(/12|16|20|24|28/)))
    .tickSize(5)
    .tickFormat(d => d.format('D.'))

  const element = canvas.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${dimensions.h})`)
    .call(axis)
    .attr('font-size', null)
    .attr('font-family', null)

  element.selectAll('text')
    .attr('y', lineHeight)
    .attr('x', 0)
    .attr('dy', 0)
    .attr('alignment-baseline', 'middle')
}

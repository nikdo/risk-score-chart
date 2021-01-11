import { axisBottom } from 'd3'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales) => {
  const tickValues = scales.x.domain()
    .filter(d => d.format('DD').match(/(01)/))
    .slice(0, -1)

  const axis = axisBottom()
    .scale(scales.x)
    .tickValues(tickValues)
    .tickSize(0)
    .tickFormat(d => d.format('MMMM'))

  canvas.append('g')
    .attr('class', 'week-days')
    .attr('transform', `translate(0, ${dimensions.h})`)
    .call(axis)
    .attr('text-anchor', null)
    .attr('font-size', null)
    .attr('font-family', null)
    .selectAll('text')
    .attr('alignment-baseline', 'middle')
}

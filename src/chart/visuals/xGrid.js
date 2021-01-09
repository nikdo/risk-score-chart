import { axisBottom } from 'd3'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales) => {
  const xGrid = axisBottom()
    .scale(scales.x)
    .tickSize(-dimensions.h)
    .tickValues(scales.x.domain().filter(d => d.format('DD').match(/01/)))
    .tickFormat('')

  canvas.append('g')
    .attr('class', 'x grid')
    .attr('transform', `translate(0, ${dimensions.h})`)
    .call(xGrid)
}

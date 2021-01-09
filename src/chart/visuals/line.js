import { line, curveLinear } from 'd3'

// eslint-disable-next-line import/no-anonymous-default-export
export default (root, _dimensions, scales, data, subscribeToHoverEvents) => {
  const lineGroup = root.append('g')
    .attr('class', 'wind-line')

  ;['relevant-levels', 'skipped-levels'].forEach(clipPath => {
    lineGroup.append('path')
      .attr('class', clipPath)
      .datum(data)
      .attr('d', line()
        .x(d => scales.x(d.datum_zobrazeni))
        .y(d => scales.y(d.body))
        .curve(curveLinear)
      )
      .attr('clip-path', `url(#${clipPath})`)
  })

  subscribeToHoverEvents({
    onMouseOut: () => lineGroup.attr('mask', null),
    onValueHover: () => lineGroup.attr('mask', 'url(#hover-overlay)')
  })
}

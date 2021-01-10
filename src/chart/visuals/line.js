import { line, curveLinear } from 'd3'

// eslint-disable-next-line import/no-anonymous-default-export
export default (root, _dimensions, scales, data, subscribeToHoverEvents) => {
  const lineGroup = root.append('g')
    .attr('class', 'wind-line')

  lineGroup.append('path')
    .attr('class', 'relevant-levels')
    .datum(data)
    .attr('d', line()
      .x(d => scales.x(d.datum_zobrazeni))
      .y(d => scales.y(d.body))
      .curve(curveLinear)
    )

  subscribeToHoverEvents({
    onMouseOut: () => lineGroup.attr('mask', null),
    onValueHover: () => lineGroup.attr('mask', 'url(#hover-overlay)')
  })
}

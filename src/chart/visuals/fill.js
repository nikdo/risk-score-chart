import { fillClipUrl } from './defs/fillClip'

// eslint-disable-next-line import/no-anonymous-default-export
export default (canvas, dimensions, scales, bftCeilings, subscribeToHoverEvents) => {
  const levels = bftCeilings.reduce((levels, _breakpoint, i, levelsCeilings) => [
    ...levels,
    {
      start: scales.y(levelsCeilings[i - 1] || 0),
      end: scales.y(levelsCeilings[i])
    }
  ], [])

  const fillGroup = canvas.append('g')
    .attr('clip-path', fillClipUrl)

  levels.forEach(({ start, end }, level) => {
    fillGroup.append('rect')
      .attr('y', end)
      .attr('width', dimensions.w)
      .attr('height', start - end)
      .attr('class', `wind-fill level-${level + 1}`)
  })

  subscribeToHoverEvents({
    onMouseOut: () => fillGroup.attr('mask', null),
    onValueHover: () => fillGroup.attr('mask', 'url(#hover-overlay)')
  })
}

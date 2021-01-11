import { bisect } from 'd3'
import { lineHeight } from './constants'

const toLevel = (value, levelCeilings) =>
  bisect(levelCeilings.map(val => val + 1), value) + 1

// eslint-disable-next-line import/no-anonymous-default-export
export default (value, scales, data, ceilings, subscribeToHoverEvents) => {
  value.append('circle')
    .attr('r', 3)

  const rect = value.append('rect')
    .attr('x', 15)
    .attr('y', -38 / 2)
    .attr('width', 62)
    .attr('height', 38)
    .attr('rx', 5)
    .attr('class', 'rect')

    const score = value.append('text')
    .attr('x', 15 + (62 / 2))
    .attr('class', 'score')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')

  const level = value.append('text')
    .attr('class', 'lvl')
    .attr('x', 15 + (62 / 2))
    .attr('dy', lineHeight * 2 + 2)
    .attr('text-anchor', 'middle')

   const date = value.append('text')
    .attr('x', 15 + (62 / 2))
    .attr('dy', lineHeight * -1.5 -4)
    .attr('text-anchor', 'middle')
    .attr('class', 'date')

  value.selectAll('text')
    .attr('paint-order', 'stroke')
    .style('paint-order', 'stroke') // Safari needs to set style when stroke is set in CSS
    .attr('stroke-linejoin', 'round')


  subscribeToHoverEvents({
    onValueHover: (_x, i) => {
      const value = data[i].body
      const levelNumber = toLevel(value, ceilings)
      rect
        .attr('class', `rect level-${levelNumber}`)
      score.text(value.toFixed(0))
      level.text('Stupeň ' + levelNumber)
        .attr('class', `lvl level-${levelNumber}`)
      date.text(scales.x.domain()[i].format('D.M.'))
    }
  })
}

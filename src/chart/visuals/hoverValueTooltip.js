import { bisect } from 'd3'
import { lineHeight } from './constants'

const toLevel = (value, levelCeilings) => bisect(levelCeilings, value) + 1

// eslint-disable-next-line import/no-anonymous-default-export
export default (value, data, bftCeilings, subscribeToHoverEvents) => {
  value.append('circle')
    .attr('r', 3)

  const ms = value.append('text')
    .attr('class', 'ms')
    .attr('x', lineHeight / 2)
    .attr('dy', lineHeight / 4)

  const bf = value.append('text')
    .attr('class', 'bft')
    .attr('x', lineHeight / 2)
    .attr('dy', lineHeight * 1.5)

  value.selectAll('text')
    .attr('paint-order', 'stroke')
    .style('paint-order', 'stroke') // Safari needs to set style when stroke is set in CSS
    .attr('stroke-linejoin', 'round')

  subscribeToHoverEvents({
    onValueHover: (x, i) => {
      const score = data[i].body
      const level = toLevel(score, bftCeilings)
      ms.text(score.toFixed(0))
      bf.text('Stupeň ' + level)
        .attr('class', `bft level-${level}`)
    }
  })
}

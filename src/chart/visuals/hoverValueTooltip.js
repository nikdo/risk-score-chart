import { bisect } from 'd3'
import { lineHeight, bftNames } from './constants'

const toBft = (value, bftCeilings) => bisect(bftCeilings, value)

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
      const windSpeed = data[i].windSpeed
      const windGustDiff = data[i].windGust - windSpeed
      const bft = toBft(windSpeed, bftCeilings)
      ms.text(windSpeed.toFixed(1) + '\u2009m/s')
        .append('tspan')
        .attr('class', 'gusts')
        .text(' +' + windGustDiff.toFixed(1))
      bf.text(bft + '\u2009bft')
        .attr('class', `bft level-${bft}`)
        .attr('display', bft > 1 ? null : 'none')
        .append('tspan').text(' ' + bftNames[bft])
    }
  })
}

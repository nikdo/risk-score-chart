import { scalePoint, scaleLinear } from 'd3'

const dayWidth = 10
const bftCeilings = [20, 40, 60, 75, 100]

// eslint-disable-next-line import/no-anonymous-default-export
export default data => {
  const dimensions = {
    w: data.length * dayWidth,
    h: 300
  }
  const scales = {
    x: scalePoint()
      .domain(data.map(d => d.datum_zobrazeni))
      .range([0, dimensions.w]),
    y: scaleLinear()
      .domain([0, 100])
      .rangeRound([dimensions.h, 0])
  }

  return { dimensions, scales, bftCeilings }
}

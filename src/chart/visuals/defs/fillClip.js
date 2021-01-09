import { area, curveLinear } from 'd3'

const fillClipId = 'fill-clip'
export const fillClipUrl = `url(#${fillClipId})`

// eslint-disable-next-line import/no-anonymous-default-export
export default (defs, dimensions, scales, data) => {
  defs.append('clipPath')
    .attr('id', fillClipId)
    .append('path')
    .datum(data)
    .attr('d', area()
      .x(d => scales.x(d.datum_zobrazeni))
      .y1(d => scales.y(d.body))
      .y0(() => dimensions.h)
      .curve(curveLinear)
    )
}

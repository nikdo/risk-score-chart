import React, { useEffect, useRef } from 'react'
import transform from '../transformations/transform'
import windChart from '../visuals/windChart'
import styles from './Chart.module.css'

export const Chart = ({ data }) => {
  const canvasNode = useRef()
  const containerRef = useRef()
  const visualizations = transform(data)

  useEffect(() => {
    const offset = visualizations.dimensions.w
    containerRef.current.scrollBy(offset, 0)
    windChart(canvasNode.current, data, visualizations)
  })

  const { dimensions } = visualizations
  const margin = { top: 25, right: 134, bottom: 24, left: 34 }
  return (
    <section ref={containerRef} className={`${styles.chart} layout-section`}>
      <svg
        width={dimensions.w + margin.left + margin.right}
        height={dimensions.h + margin.top + margin.bottom}
      >
        <g
          ref={canvasNode}
          width={dimensions.w}
          height={dimensions.h}
          transform={`translate(${margin.left}, ${margin.top})`}
        />
      </svg>
    </section>
  )
}

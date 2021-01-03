import React, { Component } from 'react'
import moment from 'moment'
import transform from '../transformations/transform'
import windChart from '../visuals/windChart'
import styles from './Chart.module.css'
import weather from './weather.json'

const transformedWeather = {
  ...weather,
  hourly: weather.hourly.map(frame => ({
    ...frame,
    time: moment(frame.time)
  }))
}

export default class Chart extends Component {
  constructor () {
    super();
    this.canvasNode = React.createRef()
    this.state = { visualisations: null }
  }

  removeChart () {
    const chart = this.canvasNode.current
    while (chart.hasChildNodes()) {
      chart.removeChild(chart.lastChild)
    }
  }

  static getDerivedStateFromProps (props) {
    return { visualisations: transform(transformedWeather) }
  }

  componentDidMount () {
    windChart(this.canvasNode.current, transformedWeather, this.state.visualisations)
  }

  componentDidUpdate () {
    this.removeChart()
    windChart(this.canvasNode.current, transformedWeather, this.state.visualisations)
  }

  render () {
    const { dimensions } = this.state.visualisations
    const margin = { top: 25, right: 34, bottom: 24, left: 34 }
    return (
      <section className={`${styles.chart} layout-section`}>
        <svg
          width={dimensions.w + margin.left + margin.right}
          height={dimensions.h + margin.top + margin.bottom}
        >
          <g
            ref={this.canvasNode}
            width={dimensions.w}
            height={dimensions.h}
            transform={`translate(${margin.left}, ${margin.top})`}
          />
        </svg>
      </section>
    )
  }
}

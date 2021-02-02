import { useEffect, useState } from 'react'
import { fetchData } from './fetchData'
import { ReactComponent as Logo } from './logo.svg'
import { Chart } from './chart/components/Chart'
import { Spinner } from './Spinner'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  return (
    <>
      <h1><Logo /><span>Index rizika</span></h1>
      {data
        ? <Chart data={data} />
        : <div style={{ height: 348, position: 'relative' }}>
            <Spinner />
          </div>
      }
    </>
  )
}

export default App

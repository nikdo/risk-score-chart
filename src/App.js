import { useEffect, useState } from 'react';
import { fetchData } from './fetchData';
import { ReactComponent as Logo } from './logo.svg';
import { Chart } from './chart/components/Chart';

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
        : <p>Loading</p>
      }
    </>
  );
}

export default App;

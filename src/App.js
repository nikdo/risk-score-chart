import moment from "moment";
import { Chart } from "./chart/components/Chart";
import pes from "./data/pes_CR.json";

function App() {
  return (
    <>
      <h1>Index rizika</h1>
      <Chart
        data={pes.map((frame) => ({
          ...frame,
          datum_zobrazeni: moment(frame.datum_zobrazeni),
        }))}
      />
    </>
  );
}

export default App;

import moment from "moment";
import "moment/locale/cs";
import { Chart } from "./chart/components/Chart";
import pes from "./data/pes_CR.json";

moment.locale('cs')

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

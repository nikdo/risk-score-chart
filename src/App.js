import moment from "moment";
import "moment/locale/cs";
import { ReactComponent as Logo } from './logo.svg';
import { Chart } from "./chart/components/Chart";
import pes from "./data/pes_CR.json";

moment.locale('cs')

function App() {
  return (
    <>
      <h1><Logo /><span>Index rizika</span></h1>
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

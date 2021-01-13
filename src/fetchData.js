import Papa from 'papaparse'
import moment from "moment";
import "moment/locale/cs";

moment.locale('cs')

const normalize = data => data.map((frame) => ({
  ...frame,
  datum_zobrazeni: moment(frame.datum_zobrazeni),
}))

export const fetchData = () => new Promise((resolve, reject) => {
  Papa.parse('/data/pes_CR_verze2.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
    complete: result => resolve(normalize(result.data)),
    error: reject
  })
})

import moment from 'moment';
import 'moment/locale/cs';

moment.locale('cs')

const normalize = data => data.map((frame) => ({
  ...frame,
  datum_zobrazeni: moment(frame.datum_zobrazeni),
}))

const apiUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3030'
  : 'https://covid-api.nikdo.cz'

export const fetchData = () => fetch(apiUrl + '/risk-score')
  .then(response => response.json())
  .then(normalize)

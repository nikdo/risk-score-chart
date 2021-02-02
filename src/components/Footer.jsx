import styles from './Footer.module.css'

export const Footer = () => <ul className={styles.footer}>
  <li>
    <a href='http://nikdo.cz'>
      © Radek Matěj
    </a>
  </li>
  <li>
    Zdrojový kód: <a href="https://github.com/nikdo/risk-score-chart">
      risk-score-chart
    </a>, <a href='https://github.com/nikdo/covid-api'>
      covid-api
    </a>
  </li>
  <li>
    Zdroj dat: <a href="https://share.uzis.cz/s/BRfppYFpNTddAy4">
      ÚZIS ČR
    </a>
  </li>
</ul>

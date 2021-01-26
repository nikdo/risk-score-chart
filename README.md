# Risk Score Chart

Interactive chart for COVID-19 risk score in Czechia.

## Running it

Install dependencies:

```bash
yarn install
```

Start [covid-api]:

```bash
cd ../covid-api
yarn install
yarn dev
```

Run client:

```bash
yarn start
```

## Deployment

Add production remote and push selected branch:

```bash
git push production main
```

Check [Linux API Infrastructure][] GitBook to learn how to setup production infrastructure.


[covid-api]: https://github.com/nikdo/covid-api
[Linux API Infrastructure]: https://github.com/nikdo/lessons-learned/blob/main/linux-api-infrastructure.md

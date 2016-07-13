# react-chartjs sample with Chart.js v2

## Exists samlpes

1. [line](https://ledsun.github.io/react-chartjs-example/line/)
1. [bar](https://ledsun.github.io/react-chartjs-example/bar/)
1. [radar](https://ledsun.github.io/react-chartjs-example/radar/)

## Add a sample

1. Add a directory for sample
1. Create an `index.html` and an `index.jsx`
1. Add an `entry` to the `webpack.confi.json`
1. Add a directory name to a npm script of the `copy` and `template`

### Build

```
npm i
npm run build
```

### Deploy

```
git clone -b gh-pages git@github.com:ledsun/react-chartjs-example.git gh-pages
npm start
cd gh-pages
git commit -m 'XXX'
git push origin gh-pages
```

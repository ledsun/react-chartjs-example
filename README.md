# react-chartjs sample with Chart.js v2

## Exists samlpes

[Samlpes](https://ledsun.github.io/react-chartjs-example/)

## Todos

- [ ] AnimationCallbacks/progress-bar.html
- [ ] bar-horizontal.html
- [ ] bar-multi-axis.html
- [ ] bar-stacked.html
- [x] bar.html
- [ ] bubble.html
- [ ] combo-bar-line.html
- [ ] data_label_combo-bar-line.html
- [ ] different-point-sizes.html
- [ ] doughnut.html
- [ ] line-customTooltips.html
- [ ] line-legend.html
- [ ] line-logarithmic.html
- [ ] line-multi-axis.html
- [ ] line-multiline-labels.html
- [ ] line-non-numeric-y.html
- [ ] line-skip-points.html
- [ ] line-stacked-area.html
- [ ] line-stepped.html
- [ ] line-x-axis-filter.html
- [x] line.html
- [ ] pie-customTooltips.html
- [x] pie.html
- [ ] polar-area.html
- [ ] radar-skip-points.html
- [x] radar.html
- [ ] scatter-logX.html
- [ ] scatter-multi-axis.html
- [ ] scatter.html
- [ ] timeScale/combo-time-scale.html
- [ ] timeScale/line-time-point-data.html
- [ ] timeScale/line-time-scale.html
- [ ] tooltip-hooks.html

## Add a sample

1. Add a directory for sample
2. Create an `index.html` and an `index.jsx`
3. Add an `entry` to the `webpack.confi.json`
4. Add a directory name to a npm script of the `copy` and `template`

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

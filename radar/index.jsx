const React = require('react')
const ReactDOM = require('react-dom')
const {Radar} = require("react-chartjs")
const randomColor = require('../lib/randomColor')
const randomScalingFactor = require('../lib/randomScalingFactor')

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(220,220,220,0.2)",
      pointBackgroundColor: "rgba(220,220,220,1)",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }, {
      label: 'Hidden dataset',
      hidden: true,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }, {
      label: "My Second dataset",
      backgroundColor: "rgba(151,187,205,0.2)",
      pointBackgroundColor: "rgba(151,187,205,1)",
      hoverPointBackgroundColor: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ]
    }
  ]
}

const options = {
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Radar Chart'
  },
  scale: {
    reverse: false,
    gridLines: {
      color: [
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
      ]
    },
    ticks: {
      beginAtZero: true
    }
  }
}

ReactDOM.render(
  <Radar data={data} options={options}/>, document.querySelector('#container'))

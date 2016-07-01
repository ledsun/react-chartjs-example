const React = require('react')
const ReactDOM = require('react-dom')
const {Bar} = require("react-chartjs")
const randomColorFactor = require('../lib/randomColorFactor')

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const config = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: "rgba(220,220,220,0.5)",
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
        hidden: true,
        label: 'Dataset 2',
        backgroundColor: "rgba(151,187,205,0.5)",
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
        label: 'Dataset 3',
        backgroundColor: "rgba(151,187,205,0.5)",
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

  },
  options: {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide and green
    elements: {
      rectangle: {
        borderWidth: 2,
        borderColor: 'rgb(0, 255, 0)',
        borderSkipped: 'bottom'
      }
    },
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

ReactDOM.render(
  <Bar data={config.data} option={config.option}/>, document.querySelector('#container'))

function randomScalingFactor() {
  return (Math.random() > 0.5
    ? 1.0
    : -1.0) * Math.round(Math.random() * 100)
}

function randomColor(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)'
}

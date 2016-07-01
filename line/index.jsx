const React = require('react')
const ReactDOM = require('react-dom')
const {Line} = require("react-chartjs")

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
  type: 'line',
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
        label: "My First dataset",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: false,
        borderDash: [5, 5]
      }, {
        hidden: true,
        label: 'hidden dataset',
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
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'label'
    },
    hover: {
      mode: 'dataset'
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Month'
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Value'
          },
          ticks: {
            suggestedMin: -10,
            suggestedMax: 250
          }
        }
      ]
    }
  }
}

for (let dataset of config.data.datasets) {
  dataset.borderColor = randomColor(0.4)
  dataset.backgroundColor = randomColor(0.5)
  dataset.pointBorderColor = randomColor(0.7)
  dataset.pointBackgroundColor = randomColor(0.5)
  dataset.pointBorderWidth = 1
}

ReactDOM.render(
  <Line data={config.data} option={config.option}/>, document.querySelector('#container'))

function randomScalingFactor() {
  return Math.round(Math.random() * 100)
}

function randomColorFactor() {
  return Math.round(Math.random() * 255)
}

function randomColor(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')'
}

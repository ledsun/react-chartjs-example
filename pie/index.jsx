const React = require('react')
const ReactDOM = require('react-dom')
const {Pie} = require("react-chartjs")
const randomColor = require('../lib/randomColor')
const randomScalingFactor = require('../lib/randomScalingFactor')

const data = {
  labels: [
    "Red", "Green", "Yellow", "Grey", "Dark Grey"
  ],
  datasets: [
    {
      data: [
        randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()
      ],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
    }, {
      data: [
        randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()
      ],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
    }, {
      data: [
        randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()
      ],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
    }
  ]
}

const options = {
  responsive: true
}

ReactDOM.render(
  <Pie data={data} options={options}/>, document.querySelector('#container'))

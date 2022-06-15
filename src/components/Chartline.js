import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js'

const dataObj = {
  '7/1': 1000,
  '7/10': 4000,
  '7/18':2000,
  '7/25': 2500,
  '7/28':4000,


}


const data = {
  labels: Object.keys(dataObj),
  datasets: [
    {

      data: Object.values(dataObj),
      label: 'برحسب تومان',
      backgroundColor: 'rgba(253, 200, 22,0.3) ',
      borderColor: 'rgba(253, 200, 22, 1)',
      borderWidth: 2,
    },
  ],
}

function LineChart(props) {
  return <div >
    <p >
      نمودار میزان مصرف کل
    </p>
     <Line height={100} data={data} {...props} />
  </div>
 
}

export default LineChart
import React from 'react'
import { Line } from 'react-chartjs-2'

const dataObj = {
  '7/1': 1000,
  '7/10': 4000,
  '7/18': 2500,
  '7.25': 1000,
  '7/28': 1500
}

const data = {
  labels: Object.keys(dataObj),
  datasets: [
    {

      data: Object.values(dataObj),
      label: 'برحسب تومان',
      backgroundColor: 'rgba(253, 200, 22,0.3) ',
      borderWidth: 2,
      borderColor: 'rgba(253, 200, 22, 1)',
     
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
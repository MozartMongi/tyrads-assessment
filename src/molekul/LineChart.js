import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; 
// import ReactTooltip from 'react-tooltip';


const LineChart = ({ data = [4, 6, 10, 2, 4], labels= ['1/07', '2/07', '3/07', '4/07', '5/07'], color = '#3742f4'}) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

//   useEffect(() => {
//     ReactTooltip.rebuild()
//   }, [])

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');



    const chartConfig = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Balance',
            data: data,
            borderColor: color,
            fill: false,
            pointStyle: false,
            borderWidth: 2,
            tension: 0.1,
            pointBackgroundColor: color
            // pointRadius: 1,  

          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: false,
            ticks:{
              precision: 0
            }
            // ticks: {
              // callback: function (value, index, values) {
              //   if (data.includes(value)) {
              //     return value;
              //   }
              //   return '';
              // },
              
            // },
          },
          x: {
            grid: {
              display: false, 
            },
            ticks: {
            },
            display: false
          },
         
        },
        plugins: {
          legend: {
            display: false, 
          },
          tooltip:{
            displayColors: false
          },
        },
      },
    };

    chartInstance.current = new Chart(myChartRef, chartConfig);
  }, [data, labels]);

  return (        
      <canvas id='lineChart' ref={chartRef}/>
  );
};

export default LineChart;

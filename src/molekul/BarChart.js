import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


const BarChart = ({ data = [{label: 'debit', data: [60, 30, 30, 20, 18], color: '#3742f4'}, {label: 'credit', data: [50, 25, 25, 15, 12], color: '#8f94f8'}], labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'] }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);
  

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    
    

    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: 
          data.map(dt => {
            return (
              {
                label: dt.label,
                data: dt.data,
                backgroundColor: dt.color,
                borderColor: dt.color,
                borderWidth: 1,
                pointBorderColor: dt.color,
                pointBackgroundColor: dt.color
              }
            )
          })
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            grid: {
                display: false,
              drawOnChartArea: true, // draw grid in graph area
            },
            ticks:{
              precision: 0
            }
          },
          x: {
            grid: {
              display: false, // hide  grid vertical
            },
          },
        },
        plugins: {
          legend: {
            display: false, // hide legend
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              boxHeight: 8,
            },
            title: {
              padding: 0
            }
          },
          tooltip:{
            displayColors: false
          }
        },
      },
    };

    chartInstance.current = new Chart(myChartRef, chartConfig);
  }, [data, labels]);


  return (
      <canvas ref={chartRef} />  
  );
};

export default BarChart;

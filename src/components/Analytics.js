import React from 'react'
import GaugeChart from 'react-gauge-chart'

const Analytics = () => {
  return (
    <>
    <div className='font-semibold mb-8'>Analytics</div>
    <GaugeChart id="gauge-chart2" 
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        percent={0.86} 
        colors={['#3742f4', '#ff8000', '#d34b0b']}
        arcPadding={0.02}
        needleColor='#FFFFFF'
        needleBaseColor='#ffffff'
        textColor='#00000'
    />
    <div className='flex justify-between px-1 space-x-1'>
        <div className='flex items-center'>
            <div className="w-2 h-2 bg-main rounded-full"></div>
            <span className='text-xs ml-1'>Done</span>
        </div>
        <div className='flex items-center'>
            <div style={{backgroundColor: '#ff8000'}} className="w-2 h-2 rounded-full"></div>
            <span className='text-xs ml-1'>In progress</span>
        </div>
        <div className='flex items-center'>
            <div style={{backgroundColor: '#d34b0b'}} className="w-2 h-2 rounded-full"></div>
            <span className='text-xs ml-1'>To do</span>
        </div>
    </div>
    
    </>
  )
}

export default Analytics
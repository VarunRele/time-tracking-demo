import React, {useState, useEffect} from 'react'
import eplises from '../assets/images/icon-ellipsis.svg'

const Card = ({ infoItem, cur }) => {
    const { title, pic, bgcolor, timeframes } = infoItem

    const [frame, setFrame] = useState(timeframes.weekly)
    
    useEffect(() => {
        if (cur === "Weekly") {
            setFrame(timeframes.weekly)
        } else if (cur === "Daily") {
            setFrame(timeframes.daily)
        } else if (cur === "Monthly") {
            setFrame(timeframes.monthly)
        }
        // eslint-disable-next-line
    }, [cur])
    

  return (
    <div className={`${bgcolor} flex flex-col justify-end rounded-xl h-28 md:h-52 w-60 md:w-auto text-center relative overflow-hidden`}>

          {/* Image */}
          <div className='absolute -top-2 -right-1 z-0'>
              <img src={pic} alt="" />
          </div>
        

          <div className='bg-dark-blue hover:bg-desaturated-blue hover:cursor-pointer h-3/4 md:h-[82%] rounded-xl z-10 p-4 md:p-5 text-white'>
              <div className='flex justify-between'>
                  <p className='text-left text-sm md:text-[16px]'>{title}</p>
                  <p className='text-right mt-3 mb-4'><img src={eplises} alt="" className='' /></p>
                
              </div>
              <div className='flex justify-between items-center -mt-3 md:flex-col md:items-start md:mt-2 md:space-y-4'>
                  <p className='text-left text-xl font-light md:text-5xl'>{frame.current}hrs</p>
                  
                <p className='text-right text-pale-blue text-xs font-light'>Last Week - {frame.previous}hrs</p>
              </div>
          </div>
        </div>
  )
}

export default Card
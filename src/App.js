import React, {useState} from 'react'
import jeremy from './assets/images/image-jeremy.png'
import Card from './components/Card'
import info from './components/info'

const App = () => {

  const [active, setActive] = useState("Weekly")

  const changeActive = (e) => {
    setActive(e.target.innerText)

    let btn = document.getElementsByClassName("time")
    for (let i = 0; i <= btn.length -1; i++) {
      btn[i].classList.remove("text-white")
      btn[i].classList.remove("font-normal")
    }

    if (!e.target.classList.contains("text-white")) {
      e.target.classList.add("text-white")
    }
    
    if (!e.target.classList.contains("font-bold")) {
      e.target.classList.add("font-normal")
    }
    
  }

  return (
    <main className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 content-center justify-items-center md:justify-items-stretch md:items-stretch md:grid-cols-4 gap-8 min-h-screen my-16 md:my-0 md:mx-4'>

        {/* Title frame */}
        <div className='bg-dark-blue relative rounded-xl row-span-2 h-40 md:h-auto w-60 md:w-auto text-center'>
          
          {/* upper */}
          <div className='grid grid-cols-3 md:grid-cols-1 bg-blue rounded-xl p-5 items-center md:items-start h-2/3'>
            <div className='w-14 h-14 md:w-20 md:h-20 border-2 md:border-[3px] rounded-full'>
              <img src={jeremy} alt="profile-pic" />
            </div>

            <div className='col-span-2 text-left leading-tight'>
              <p className='font-light text-xs text-pale-blue'>Report for</p>
              <p className='font-light text-lg text-white md:text-4xl'>Jeremy Robson</p>
            </div>
          </div>
          
          {/* Lower */}
          <div className=' text-pale-blue font-light text-sm flex md:flex-col justify-between px-6 h-1/3 items-center md:items-start md:justify-evenly'>
            <h3 className='hover:cursor-pointer time' onClick={changeActive}>Daily</h3>
            <h3 className='hover:cursor-pointer time font-normal text-white' onClick={changeActive}>Weekly</h3>
            <h3 className='hover:cursor-pointer time' onClick={changeActive}>Monthly</h3>
          </div>

        </div>

        {info.map((i) => {
          return <Card key={i.title} infoItem={i} cur={active} />
        })}

      </div>
    </main>
  )
}

export default App
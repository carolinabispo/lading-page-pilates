import React from 'react'
import LOGO from '../../assets/logo.jpg'
const Header = () => {
  return (
    <div className=' h-32 w-screen flex  items-center justify-around flex-col md:flex-row bg-[#F5F1EB]'>
      <div className='h-full flex justify-center items-center'>
        {/* <img src={LOGO} alt="logo-attive" className='h-28 w-40' /> */}
        <h1 className='font-noto-sans font-extrabold text-4xl'>
          attive
        </h1>
      </div>
      <div className=' w-2/4 h-full flex font-noto-sans justify-center items-center text-sm font-bold space-x-3 '>
        <p>AULAS</p>
        <p>INSTRUTORAS</p>
        <p>HORARIOS</p>
      </div>
      
    </div>
  )
}

export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom'

function namerize() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center px-6 py-28">
      <h1 className='text-6xl font-bold text-center mb-6'>
      Generate Perfect Product Names with<br/> Nameriz<span class="text-[#0ac37f]">e</span>
      </h1>
      <p className='text-lg text-gray-400 text-center mt-4'>
      Struggling to find the perfect name for your next project or business?
      </p>
      <p className='text-md text-gray-400 text-center mt-4'>
      Namerize has got you covered.
      Namerize is a free tool that helps you generate perfect product names. <br/> It is a simple and easy to use tool that helps you generate product names for your business or project using AI.
      </p>
      <button className='bg-[#0ac37f] text-[#ffffff] px-9 py-2 rounded-lg mt-8 hover:bg-[#0ac37fe4]' onClick={() => navigate('/create')}>
        Generate
      </button>
    </div>
  )
}

export default namerize

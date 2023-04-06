import React from 'react'
import Namerize from './pages/namerize'
import { FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className="w-full sm:px-8 bg-[#000]">
      <header className="flex flex-wrap justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-bold"
          >namerize</h1>

          <a href="" className="text-3xl ml-4">
            <FaGithub />
          </a>

      </header>
      <main className="w-full h-screen">
        <Namerize />
      </main>
      <footer className='flex items-center justify-center w-full h-24'>
        <div>
          <p className="text-center text-gray-500 text-xs">
            2023 namerize. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
  )
}

export default App

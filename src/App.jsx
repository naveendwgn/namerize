import React from 'react'
import Namerize from './pages/namerize'
import { FaGithub } from 'react-icons/fa'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/create'

function App() {
  return (
    <BrowserRouter>
    <div className="w-full sm:px-8 py-4 px-8 bg-[#000]">
      <header className="flex items-center sm:px-8 px-6 py-4">
           <a href="/"
            className="text-xl font-bold text-center mb-6"
              >nameriz<span className="text-[#0ac37f]">e</span>
           </a>
          <div className="flex items-center ml-auto">
            <a href="https://github.com/naveendwgn/namerize" className="text-3xl mr-2">
              <FaGithub />
            </a>
          </div>
      </header>
      <main className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Namerize />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      <footer className='flex items-center justify-center w-full h-24'>
        <div>
          <p className="text-center text-gray-500 text-xs">
            © 2023 nameriz<span className="text-[#0ac37f]">e</span>. Powered by <a href="https://openai.com/" className="text-[#0ac37f]">OpenAI</a>
          </p>
        </div>
      </footer>
      </div>
    </BrowserRouter>  
  )
}

export default App

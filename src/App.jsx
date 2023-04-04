import React from 'react'
import Namerize from './pages/namerize'

function App() {
  return (
    <div className="w-full sm:px-8 bg-gradient-to-br from-[#EF3B36] via-[#ffdde1ef]">
      <header className="flex items-center px-6 py-6">
        <div>
          <h1 className="text-2xl font-bold"
          >namerize</h1>
        </div>
      </header>
      <main className="px-6 py-6">
        <Namerize />
      </main>
      <footer>
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

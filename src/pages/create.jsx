import { useState } from 'react'


function create() {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [productDescription, setProductDescription] = useState('');
  const [seedWords, setSeedWords] = useState('');
  const [productNames, setProductNames] = useState('');
  
  async function callOpenAI() {
    /*console.log('Generating names...')*/

    const APIBody = {
      "model": "text-davinci-003",
      "prompt": `Product description: ${productDescription} \n Seed words: ${seedWords} \n Generate 4 Product Names:`,
      "temperature": 0.8,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }

    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(APIBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      setProductNames(data.choices[0].text.trim())
    })
  }

  /*console.log(productDescription)
  console.log(seedWords)*/

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className='text-2xl text-white font-bold text-center mb-6'>
        Create product names from example prompt</h1>
        <p className='text-lg text-gray-400  mt-4 bg-[#141414] mb-8 p-6 rounded-lg'>
        Product description: A home milkshake maker <br/>
        Seed words: fast, healthy, compact.<br/>
        Results: HomeShaker, Fit Shaker, QuickShake, Shake Maker<br/>
        </p>
        <div className="flex flex-col items-center justify-center w-5/6 sm:w-1/2">
          <input
            type="text" 
            placeholder="Product description"
            onChange={(e) => setProductDescription(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg mb-4 outline-1 outline-white bg-[#141414] text-white border border-[#0ac37f] focus:outline-none focus:border-[#0ac37f] sm:mb-0 sm:w-3/4 sm:mr-4"
          />
          <input
            type="text" 
            placeholder="Seed words (comma separated)"
            onChange={(e) => setSeedWords(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg mb-4 mt-3 outline-1 outline-white bg-[#141414] text-white border border-[#0ac37f] focus:outline-none focus:border-[#0ac37f] sm:mb-0 sm:w-3/4 sm:mr-4"
          />
          <div className="flex justify-center items-center">
            <button 
            className='bg-[#0ac37f] text-[#ffffff] px-5 py-2 rounded-lg mt-4 hover:bg-[#0ac37fe4]'
            onClick={callOpenAI}>Generate
            </button>
        </div>
        {productNames !== '' ?
            <div className="flex flex-col items-center justify-center w-5/6 sm:w-1/2">
              <p className='text-lg text-gray-400  mt-4 bg-[#141414] mb-8 p-6 rounded-lg'>
                Results: {productNames}
              </p>
            </div>
            : null}
        </div>
    </div>
  )
}

export default create;
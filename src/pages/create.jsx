import { useState, useEffect } from 'react'
import { useLazyGetProductsQuery } from '../services/productName';

function create() {

  const [product, setProduct] = useState({
    description: '',
    result: ''
  });

  const [getResult, { error, isFetching }] = useLazyGetProductsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getResult( { description: product.description } );

    setProduct({...product, result: data.result});
    console.log(data.result);
}

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className='text-2xl text-white font-bold text-center mb-6'>
        Create product names from example prompt</h1>
        <p className='text-lg text-gray-400  mt-4 bg-[#141414] mb-8 p-6 rounded-lg'>
        Product description: A home milkshake maker <br/>
        Seed words: fast, healthy, compact.<br/>
        The resnponse would be: Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker<br/>
        </p>
        <form
        onSubmit={handleSubmit}
        >
          <input 
          type="text" 
          placeholder="Product description" 
          value={product.description}
          onChange={(e) => setProduct({...product, description: e.target.value})}
          required
          className="mx-auto w-full rounded-lg p-4 outline-1 outline-white sm:mt-7 sm:w-3/4 bg-[#141414] text-white border border-[#0ac37f] focus:outline-none focus:border-[#0ac37f]"
          />

          <button
          type="submit"
          className='bg-[#0ac37f] text-[#ffffff] px-9 py-2 rounded-lg mt-8 hover:bg-[#0ac37fe4]'
          >
              Generate
          </button>
          {/*Display results*/}

        </form>
    </div>
  )
}

export default create;
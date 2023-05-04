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
  className='justify-center flex flex-col items-center sm:w-3/4'
  onSubmit={handleSubmit}
>
  <input 
    type="text" 
    placeholder="Product description" 
    value={product.description}
    onChange={(e) => setProduct({...product, description: e.target.value})}
    required
    className="w-full px-4 py-3 rounded-lg mb-4 outline-1 outline-white bg-[#141414] text-white border border-[#0ac37f] focus:outline-none focus:border-[#0ac37f] sm:mb-0 sm:w-3/4 sm:mr-4"
  />

  <button
    type="submit"
    className=' mt-6 bg-[#0ac37f] text-[#ffffff] px-6 py-3 rounded-lg hover:bg-[#0ac37fe4]'
  >
    Generate →
  </button>
  {/*Display results*/}
</form>

    </div>
  )
}

export default create;
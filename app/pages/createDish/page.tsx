"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const Page = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);
  const [desc, setDesc] = useState('');
  const [quantity, setQuantity] = useState(false);
  const router=useRouter();
  const handleAddDish = async () => {
    const dish = { name, desc, price, available, quantity };

    try {
      const response = await fetch('/api/dishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dish),
      });

      if (!response.ok) {
        throw new Error('Failed to add dish');
      }

      const newDish = await response.json();
      console.log('Dish added successfully:', newDish);
      router.push('/')
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  return (
    <div className='min-h-screen bg-slate-600 justify-center flex flex-col items-center gap-2'>
      <div className='flex flex-col gap-2 border-2 bg-white p-4'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
        <input type="text" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder='price' />
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='description' />
        <button onClick={() => setAvailable(prev => !prev)} className='bg-blue-500 text-white p-2'>
          {available ? 'Available' : 'Not Available'}
        </button>
        <button onClick={() => setQuantity(prev => !prev)} className='bg-blue-500 text-white p-2'>
          {quantity ? 'In Stock' : 'Out of Stock'}
        </button>
        
      </div>
      <button onClick={handleAddDish} className='bg-white text-black font-bold w-1/12 shadow-md shadow-white border-red-500'>
        Add
      </button>
    </div>
  );
}

export default Page;

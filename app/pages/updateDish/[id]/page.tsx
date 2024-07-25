"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);
  const [desc, setDesc] = useState('');
  const [quantity, setQuantity] = useState(0); // Changed to number instead of boolean
  const router = useRouter();
  const { id: dishId } = router.query;

  useEffect(() => {
    if (!dishId) return;

    // Fetch the current dish data here if needed and set the state
    const fetchDishData = async () => {
      try {
        const response = await fetch(`/api/dishes/${dishId}`);
        const data = await response.json();
        if (response.ok) {
          setName(data.name);
          setPrice(data.price);
          setAvailable(data.available);
          setQuantity(data.quantity);
          setDesc(data.desc);
        } else {
          console.error('Failed to fetch dish data');
        }
      } catch (error) {
        console.error('Error fetching dish data:', error);
      }
    };

    fetchDishData();
  }, [dishId]);

  const handleUpdateDish = async () => {
    try {
      const response = await fetch(`/api/dishes/${dishId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, available, quantity, desc }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.msg);
        // Optionally, you can navigate or refresh the page
        router.push('/some-page'); // Replace with the page you want to navigate to
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('Error updating dish:', error);
    }
  };

  return (
    <div className='min-h-screen bg-slate-600 justify-center flex flex-col items-center gap-2'>
      <div className='flex flex-col gap-2 border-2 bg-white p-4'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder='price' />
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='description' />
        <button onClick={() => setAvailable(prev => !prev)} className='bg-blue-500 text-white p-2'>
          {available ? 'Available' : 'Not Available'}
        </button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder='quantity' />
      </div>
      <button onClick={handleUpdateDish} className='bg-white text-black font-bold w-1/12 shadow-md shadow-white border-red-500'>
        Update
      </button>
    </div>
  );
}

export default Page;

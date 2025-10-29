import React, { useState } from 'react'
export default function Tools(){
  const [h,setH]=useState(''); const [w,setW]=useState(''); const [res,setRes]=useState(null);
  function calc(){ const bmi = parseFloat(w)/((parseFloat(h)/100)**2); if(isNaN(bmi)) return setRes(null); setRes(bmi.toFixed(1)); }
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4'>Tools</h2>
      <div className='bg-white p-4 rounded shadow'>
        <div className='grid sm:grid-cols-3 gap-3'>
          <input placeholder='Height (cm)' value={h} onChange={e=>setH(e.target.value)} className='p-2 border rounded' />
          <input placeholder='Weight (kg)' value={w} onChange={e=>setW(e.target.value)} className='p-2 border rounded' />
          <button onClick={calc} className='px-3 py-2 bg-green-500 text-white rounded'>Calc BMI</button>
        </div>
        {res && <div className='mt-3'>BMI: <strong>{res}</strong></div>}
      </div>
    </section>
  )
}

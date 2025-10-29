import React from 'react'
export default function Home({onNavigate}){
  return (
    <section>
      <h2 className='text-3xl font-bold mb-2'>Your health, simplified.</h2>
      <p className='text-gray-600 mb-4'>Tools, articles, and trackers to help you build habits.</p>
      <div className='grid md:grid-cols-3 gap-4 mt-6'>
        <div className='p-4 bg-white rounded shadow' onClick={()=>onNavigate('tools')}><h4>BMI</h4></div>
        <div className='p-4 bg-white rounded shadow' onClick={()=>onNavigate('meditation')}><h4>Meditation</h4></div>
        <div className='p-4 bg-white rounded shadow' onClick={()=>onNavigate('tracker')}><h4>Tracker</h4></div>
      </div>
    </section>
  )
}

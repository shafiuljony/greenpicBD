import React from 'react'

export default function SectionTitle({
  title = 'section title',
  desc = 'what is this?'
}) {
  return (
    <div>
        <h1 className='text-6xl mb-1 font-rajdhani font-bold'>
          {title}
        </h1>
        <p className='text-lg font-sans'>{desc}</p>
    </div>
  )
}

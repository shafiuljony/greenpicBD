import React from 'react';
import CatagoryImg from '../assets/images/category-2.png';

export default function ProductCatagory({
  img = CatagoryImg,
  title = 'catagory name',
  totalItems = '78 items'
}) {
  return (
    <div className=''>
      <div className="card h-96 w-96 bg-base-100 shadow-xl flex flex-col items-center border border-slate-300">
        <figure className="px-10 pt-10 items-center">
          <a href='/'>
          <img src={CatagoryImg} alt="itemImg" className="rounded-xl" />
          </a>
        </figure>
        <div className="card-body px-5 pt-16 pb-2">
          <a href='/'>
            <h5 className="card-title font-extrabold text-lg">{title}</h5>
          </a>
          <h6 className='font-bold'>{totalItems}</h6>
        </div>
      </div>
    </div>
  )
}

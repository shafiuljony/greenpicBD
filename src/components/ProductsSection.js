import React from 'react'
import ProductCatagory from './ProductCatagory';
import CatagoryImg from '../assets/images/category-2.png';

export default function ProductsSection() {
  return (
    <div className='container mx-auto flex space-x-10 justify-center'>
      <div className="" >
      <ProductCatagory img={CatagoryImg} title='Browse all' totalItems='(135 items)'
       />
      </div>
      <div className="" >
      <ProductCatagory img={CatagoryImg} title='Browse all' totalItems='(135 items)'
       />
      </div>
      <div className="" >
      <ProductCatagory img={CatagoryImg} title='Browse all' totalItems='(135 items)'
       />
      </div>
      <div className="" >
      <ProductCatagory img={CatagoryImg} title='Browse all' totalItems='(135 items)'
       />
      </div>
    </div>
  )
}

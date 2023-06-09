import React from 'react'
import TopContent from '../components/general/TopContent'
import Product from '../components/general/Product'


const Products = () => {
  return (
    <div className="-mt-[100px]">
{/* <TopContent height={`[500px]`}/> */}
<TopContent height={`[300px]`} mainHeading={"product"} bottomHeading={"programs"} />
<Product heading={"products"}/>
    </div>
  )
}

export default Products
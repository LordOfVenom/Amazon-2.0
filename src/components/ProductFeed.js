import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {/*Here we are going to use server side rendering*/}
      {products.slice(0,4).map(({id, title, price, description, category, image})=>(
        <Product
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
        />
      ))}
      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt=""/>
      <div className='md:col-span-2'>
        {products.slice(4,5).map(({id, title, price, description, category, image})=>(
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
      {products.slice(5,7).map(({id, title, price, description, category, image})=>(
        <Product
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
        />
      ))}
      <img className='md:col-span-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/GW-editorial_2300x646._CB611152745_.jpg" alt=""/>
      {products.slice(7,11).map(({id, title, price, description, category, image})=>(
        <Product
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
        />
      ))}
      <div className='md:col-span-full'>
        {products.slice(13,14).map(({id, title, price, description, category, image})=>(
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
      {products.slice(11,13).map(({id, title, price, description, category, image})=>(
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
        {products.slice(14,products.length).map(({id, title, price, description, category, image})=>(
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
        
        
    </div>
  );
}

export default ProductFeed;

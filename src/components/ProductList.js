import React from 'react';
import Product from './Product';


const ProductList = (props) => {
  return (
    <ul className="container">
      {props.products.map((product) => (
        <Product
          key={product.id}
          type={product.category}
          rating={product.rating.rate}
          image={product.image}
          title={product.title}
          cost={product.price} />
      ))}
    </ul>
  );
};
    //  <li className="container-list">
    //    <div className="container-list_head">
    //     <p><b>Type:</b> {dummyProduct[0].category}</p> 
    //     <p><b>Rating:</b> {dummyProduct[0].rating.rate}</p>
    //   </div>
    //   <img src={dummyProduct[0].image} alt="Product" />
    //   <p className="title">{dummyProduct[0].title}</p>
    //   <p className="price"><b>Cost:</b> {dummyProduct[0].price}</p>
    //   <button className="btn">Add To Cat</button>
    // </li>

    {/* <li className="container-list">
    <div className="container-list_head">
      <p>{dummyProduct[1].category}</p> 
      <p>{dummyProduct[1].rating.rate}</p>
    </div>
      <img src={dummyProduct[1].image} alt="ok" className="product_image"/>
      <h4>{dummyProduct[1].title}</h4>
      <h3>{dummyProduct[1].price}</h3>
    </li> */}
//   </ul>
//   );
// };

export default ProductList;

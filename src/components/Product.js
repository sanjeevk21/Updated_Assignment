import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Product = (props) => {
  return (
    <li className="container-list">
      <div className="container-list_head">

      <p><b>Type:</b> {props.type}</p> 
         <p><b>Rating:</b> {props.rating}</p>
       </div>
       <img src={props.image} alt="Product" />
       <p className="title">{props.title}</p>
       <p className="price"><b>Cost:</b> ${props.cost}</p>
        <Link to="/Newpage" className="btn">Add To Cart</Link>
        
      
     </li>
  );
};

export default Product;

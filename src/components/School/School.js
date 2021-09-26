import React from 'react';
import './school.css'
const School = (props) => {  
  const {name,img,location,established,students} = (props.sc)
 
 return (
   <div>
     <div className="singleCard">
         <img src={img} alt='' /> 
          <h1>name : {name}</h1>
          <h1>established : {established}</h1>
          <h1>students : {students}</h1>
          <h1>location : {location}</h1>
          {/* <h1>{props.name}</h1> */}
          <div onClick={() =>props.handle(props.sc)} className="btn-container"> <button className="addToCart">add to cart</button></div>
    </div>
   </div>
 )
};

export default School;
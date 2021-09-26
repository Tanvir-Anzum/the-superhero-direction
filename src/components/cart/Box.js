import React from 'react';
import './cart.css'
const Box = (props) => {
 console.log(props.added)
 const {added} = props;
 let total = 0;
 for(const element of added){
  total = total + element.students;
 }
 return (
   <div className="single-cart">
     <h3>Order Summary</h3>
     <h3>Items added : {props.added.length}</h3>
     <h3>Total Students : {total}</h3>
   </div>
 )
};

export default Box;
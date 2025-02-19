import React from "react";

function ProductCard(props){
    return (
        <div id = "outer-div">
            <img src={props.image} alt={props.alt}></img>

            <div id="lower-div">

                <div id="product_name"><strong>Product Name: </strong><span>{props.name}</span></div>
                <div id="price"><strong>Price: </strong>{props.age}</div>
                <div id="description"><strong>Short Description: </strong>{props.description}</div>

            </div>
        </div>
    );
  }

export default ProductCard;
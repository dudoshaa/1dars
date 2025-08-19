import React from "react";
import Cart from "./Cart";

function Desserts({ desserts }) {
  return (
    <div className="desserts__container" >
      <h1 className="title">Desserts</h1>
      <div className="desserts">
        {desserts.map((dessert) => {
          return <Cart key={dessert.id} dessert={dessert} />;
        })}
      </div>
    </div>
  );
}

export default Desserts;

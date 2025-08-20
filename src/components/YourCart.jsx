import React, { useState } from "react";
import { useSelector } from "react-redux";
import DessertItem from "./DessertItem";
import { formatNumber } from "../utils";
import Modal from "./Modal";

function YourCart() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.desserts
  );
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="your-cart">
      <h3 className="your-cart__title">Your Cart ({totalAmount})</h3>
      {totalAmount === 0 && (
        <div className="your-cart__empty">
          <img
            className="your-cart__empty-image"
            src="../images/illustration-empty-cart.svg"
            alt=""
            width={128}
            height={128}
          />
          <p className="your-cart__desc">Your added items will appear here</p>
        </div>
      )}
      {totalAmount !== 0 &&
        desserts.map((dessert) => {
          return <DessertItem key={dessert.id} dessert={dessert} />;
        })}
      {totalAmount !== 0 && (
        <>
          {showModal && <Modal setShowModal={setShowModal} />}
          <div className="order-total">
            <h3 className="order-total__title">Order Total</h3>
            <p className="order-total__price">{formatNumber(totalPrice)}</p>
          </div>
          <div className="carbon-neutral">
            <img
              className="carbon-image"
              src="../images/icon-carbon-neutral.svg"
              alt=""
            />
            <p className="carbon__desc">
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button onClick={() => setShowModal(true)} className="your-cart__btn">
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default YourCart;

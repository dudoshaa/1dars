import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDessert,
  decrementAmount,
  incrementAmount,
  removeDessert,
} from "../app/features/dessertSlice";
import { formatNumber } from "../utils";

function Cart({ dessert }) {
  const { desserts } = useSelector((store) => store.desserts);
  const dispatch = useDispatch();
  const isAdded = desserts.find((item) => item.id === dessert.id);

  return (
    <div className="card">
      <picture>
        <source
          media="(min-width:996px)"
          srcSet={dessert.image.desktop}
          sizes="250px"
        />
        <source
          media="(min-width:768px)"
          srcSet={dessert.image.tablet}
          sizes="213px"
        />
        <source
          media="(min-width:375px)"
          srcSet={dessert.image.mobile}
          sizes="327px"
        />
        <img
          style={{ borderColor: isAdded ? "#c7380f" : "transparent" }}
          className="card__image"
          src={dessert.image.thumbnail}
          alt={dessert.name}
        />
      </picture>
      <div className="card__btn">
        {!isAdded && (
          <button
            onClick={() => dispatch(addDessert(dessert))}
            className="card__add__to"
          >
            <img
              src="../images/icon-add-to-cart.svg"
              alt="add to cart"
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        )}
        {isAdded && (
          <div className="card__btns-amount">
            <button
              onClick={() => {
                if (isAdded.amount == 1) {
                  dispatch(removeDessert(isAdded.id));
                } else {
                  dispatch(decrementAmount(isAdded.id));
                }
              }}
              className="card__btn-amount"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span>{isAdded.amount}</span>
            <button
              onClick={() => dispatch(incrementAmount(isAdded.id))}
              className="card__btn-amount"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="card__body">
        <p className="card__category">{dessert.category}</p>
        <p className="card__name">{dessert.name}</p>
        <p className="card__price">{formatNumber(dessert.price)}</p>
      </div>
    </div>
  );
}

export default Cart;

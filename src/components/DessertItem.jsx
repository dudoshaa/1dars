import React from "react";
import { formatNumber } from "../utils";
import { useDispatch } from "react-redux";
import { clearAmount } from "../app/features/dessertSlice";

function DessertItem({ dessert }) {
  const dispatch = useDispatch();
  return (
    <div className="dessert-item">
      <div className="dessert-item__body">
        <h4 className="dessert-item__title">{dessert.name}</h4>
        <div className="dessert-item__info">
          <p className="dessert-item__amount">{dessert.amount}x</p>
          <p className="dessert-item__price">@ {formatNumber(dessert.price)}</p>
          <strong className="dessert-item__totalprice">
            {formatNumber((dessert.price || 0) * (dessert.amount || 0))}
          </strong>
        </div>
      </div>
      <button
        onClick={() => dispatch(clearAmount(dessert.id))}
        className="dessert-item__remove"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default DessertItem;

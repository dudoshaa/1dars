import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../utils";
import { clearDessert } from "../app/features/dessertSlice";

function Modal({ setShowModal }) {
  const { totalPrice, desserts } = useSelector((store) => store.desserts);
  const dispatch = useDispatch();
  console.log(desserts);
  return (
    <>
      <div onClick={() => setShowModal(false)} className="modal__overlay">
        <div className="modal">
          <div className="order-confirmed">
            <img
              className="order-confirmed__image"
              src="../images/icon-order-confirmed.svg"
              alt=""
              width={48}
              height={48}
            />
            <h3 className="order-confirmed__title">Order Confirmed</h3>
            <p className="order-confirmed__desc">
              We hope you enjoy your food!
            </p>
          </div>
          <ul className="order-confirmed__list">
            {desserts.map((dessert) => {
              return (
                <li key={dessert.id} className="order-confirmed__item">
                  <div className="order-confirmed__body">
                    <img
                      className="order-confirmed__image"
                      src={dessert.image.thumbnail}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <div className="order-confirmed__info">
                      <h5 className="order-confirmed__name">{dessert.name}</h5>
                      <div className="order-confirmed__price__wrappar">
                        <p className="order-confirmed__amount">
                          {dessert.amount}x
                        </p>
                        <p className="order-confirmed__price">
                          @ {formatNumber(dessert.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="order-confirmed__totalPrice">
                    {formatNumber(`${dessert.price * dessert.amount}`)}
                  </p>
                </li>
              );
            })}
            <div className="order__price__wrappar">
              <p className="order__title">Order Total</p>
              <p className="order__price">{formatNumber(totalPrice)}</p>
            </div>
          </ul>
          <button
            onClick={() => dispatch(clearDessert())}
            className="order__btn"
          >
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;

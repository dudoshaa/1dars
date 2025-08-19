import React, { useState } from "react";

function Cart({ dessert }) {
  const [isAdded, setIsAdded] = useState(false);
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
          className="card__image"
          src={dessert.image.thumbnail}
          alt={dessert.name}
        />
      </picture>
      <div className="card__btn">
        {!isAdded && (
          <button onClick={() => setIsAdded(true)} className="card__add__to">
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
            <button onClick={()=>setIsAdded(false)} className="card__btn-amount">
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
            <span>{1}</span>
            <button className="card__btn-amount">
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
        <p className="card__price">${dessert.price}</p>
      </div>
    </div>
  );
}

export default Cart;

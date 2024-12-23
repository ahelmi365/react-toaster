import { selectTotalNumberOfItemsInCart } from "@store/cart/selectors";
import { BasketLogo } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const { basketContainer, basketQuantity, animatedQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const totalNumberOfItemsInCart = useAppSelector(
    selectTotalNumberOfItemsInCart
  );

  useEffect(() => {
    if (totalNumberOfItemsInCart === 0) return;
    setIsAnimated(true);
    const timeoutId = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [totalNumberOfItemsInCart]);
  return (
    <Link
      to="/cart"
      className={basketContainer}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={basketCart}>
        <BasketLogo />
        <div
          className={`${basketQuantity} ${isAnimated ? animatedQuantity : ""} `}
        >
          {totalNumberOfItemsInCart}
        </div>
      </div>
      <h3>Cart</h3>
    </Link>
  );
};

export default HeaderBasket;

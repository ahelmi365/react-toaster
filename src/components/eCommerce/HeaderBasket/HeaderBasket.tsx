import { selectTotalNumberOfItemsInCart } from "@store/cart/selectors";
import { BasketLogo } from "@components/common";
import { useAppSelector } from "@store/hooks";

import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalNumberOfItemsInCart = useAppSelector(
    selectTotalNumberOfItemsInCart
  );
  return (
    <div className={basketContainer}>
      <BasketLogo />
      <div className={basketQuantity}>{totalNumberOfItemsInCart}</div>
    </div>
  );
};

export default HeaderBasket;

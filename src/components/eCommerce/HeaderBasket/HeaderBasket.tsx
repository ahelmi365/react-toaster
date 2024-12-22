import BasketLogo from "../../common/BasketLogo/BasketLogo";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <BasketLogo />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;

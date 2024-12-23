import { addItemToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { IProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const { product, productImg } = styles;

const Product = ({ id, title, img, price }: IProduct) => {
  const dispatch = useAppDispatch();

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!isButtonClicked) return;

    setIsButtonDisabled(true);
    const timeoutId = setTimeout(() => {
      setIsButtonDisabled(false);
      setIsButtonClicked(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isButtonClicked]);
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={() => {
          dispatch(addItemToCart(id));
          setIsButtonClicked(true);
        }}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;

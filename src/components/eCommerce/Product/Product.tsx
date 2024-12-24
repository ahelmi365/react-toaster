import { memo, useCallback, useEffect, useState } from "react";
import { addItemToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { IProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";

import styles from "./styles.module.css";

const { product, productImg } = styles;

const Product = memo(({ id, title, img, price, max, quantity }: IProduct) => {
  const dispatch = useAppDispatch();
  const remainingItems = max - (quantity ?? 0);
  const isReachedMax = remainingItems <= 0;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!isButtonDisabled) return;

    const timeoutId = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isButtonDisabled]);
  const handleAddToCart = useCallback(() => {
    dispatch(addItemToCart(id));
    setIsButtonDisabled(true);
  }, [id, dispatch]);

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className="text-danger">{isReachedMax && "You reached max"}</p>
      {/* <h3>Max: {max}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Available: {remainingItems}</h3> */}
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={handleAddToCart}
        disabled={isButtonDisabled || isReachedMax}
      >
        {isButtonDisabled ? (
          <>
            Loading... <Spinner animation="border" size="sm" />
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;

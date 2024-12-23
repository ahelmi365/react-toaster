import { addItemToCart } from "@store/cart/cartSlice";
import { IProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { Button } from "react-bootstrap";

import styles from "./styles.module.css";

const { product, productImg } = styles;

const Product = ({ id, title, img, price }: IProduct) => {
  const dispatch = useAppDispatch();
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
        onClick={() => dispatch(addItemToCart(id))}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;

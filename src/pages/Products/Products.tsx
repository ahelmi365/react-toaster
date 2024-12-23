import actGetProductsByCategoryPrefix from "@store/products/act/actGetProductsByCategoryPrefix";
import { resetProductsRecords } from "@store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const Products = () => {
  const params = useParams();
  const catPrefix = params.prefix;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { error, loading, records } = useAppSelector((state) => state.products);

  //  a variable to store records with number of items in the cart fo each item
  const productsWithQuantity = records.map((product) => {
    return { ...product, quantity: cartItems[product.id!] || 0 };
  });

  useEffect(() => {
    dispatch(actGetProductsByCategoryPrefix(catPrefix!));

    return () => {
      dispatch(resetProductsRecords());
    };
  }, [catPrefix, dispatch]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={productsWithQuantity}
          renderItem={(product) => <Product {...product} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;

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
  const { error, loading, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCategoryPrefix(catPrefix!));

    return () => {
      dispatch(resetProductsRecords());
    };
  }, [catPrefix]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(product) => <Product {...product} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;

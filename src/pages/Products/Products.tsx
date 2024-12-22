import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsByCategoryPrefix from "@store/products/act/actGetProductsByCategoryPrefix";
import { resetProductsRecords } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  let { error, loading, records } = useAppSelector((state) => state.products);
  const params = useParams();
  const catPrefix = params.prefix;
  useEffect(() => {
    dispatch(actGetProductsByCategoryPrefix(catPrefix!));

    return () => {
      dispatch(resetProductsRecords());
    };
  }, [catPrefix]);

  const renderedProductsList = records?.map((product) => (
    <Col
      xs={12}
      sm={6}
      md={3}
      className="d-flex justify-content-center"
      key={product.id}
    >
      <Product {...product} />
    </Col>
  ));
  return (
    <Container>
      <Row className="justify-content-center g-2">{renderedProductsList}</Row>
    </Container>
  );
};

export default Products;

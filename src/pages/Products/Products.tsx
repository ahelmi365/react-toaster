import { Product } from "@components/eCommerce";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <Row cclassName="justify-content-center g-2">
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center">
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;

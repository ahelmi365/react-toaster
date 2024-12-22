import { Product } from "@components/eCommerce";
import { Col, Container , Row} from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <Row cclassName="justify-content-center g-2">
        <Col sm={12} md={3} >
          <Product />
        </Col>
        <Col sm={12} md={3} >
          <Product />
        </Col>
        <Col sm={12} md={3} >
          <Product />
        </Col>
        <Col sm={12} md={3} >
          <Product />
        </Col>
        <Col sm={12} md={3} >
          <Product />
        </Col>
        <Col sm={12} md={3} >
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;

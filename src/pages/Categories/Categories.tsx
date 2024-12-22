import { Col, Container, Row } from "react-bootstrap";
import { Category } from "@components/eCommerce";
const Categories = () => {
  return (
    <Container>
      <Row className="justify-content-center g-2">
        <Col sm={12} md={3} >
          <Category />
        </Col>
        <Col sm={12} md={3} >
          <Category />
        </Col>
        <Col sm={12} md={3} >
          <Category />
        </Col>
        <Col sm={12} md={3} >
          <Category />
        </Col>
        <Col sm={12} md={3} >
          <Category />
        </Col>
        <Col sm={12} md={3} >
          <Category />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;

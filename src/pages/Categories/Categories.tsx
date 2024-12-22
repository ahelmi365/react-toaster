import { Col, Container, Row } from "react-bootstrap";
import { Category } from "@components/eCommerce";
const Categories = () => {
  return (
    <Container>
      <Row className="justify-content-center g-2">
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex justify-content-center" >
          <Category />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;

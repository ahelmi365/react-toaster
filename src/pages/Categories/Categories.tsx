import actGetCategories from "@store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Col, Container, Row } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [records]);

  const renderedCategories = records?.map((category) => (
    <Col
      xs={12}
      sm={6}
      md={3}
      className="d-flex justify-content-center"
      key={category.id}
    >
      <Category {...category} />
    </Col>
  ));

  if (records) {
    return (
      <Container>
        <Loading status={loading} error={error}>
          <Row className="justify-content-center g-2">{renderedCategories}</Row>
          <GridList
            records={records}
            renderItem={(category) => <Category {...category} />}
          />
        </Loading>
      </Container>
    );
  }
};

export default Categories;

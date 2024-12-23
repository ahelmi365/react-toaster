import { Col, Row } from "react-bootstrap";
import React from "react";

interface Identifiable {
  id?: number;
}

interface IGridListProps<T extends Identifiable> {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
}

const GridList = <T extends Identifiable>({
  records,
  renderItem,
}: IGridListProps<T>) => {
  return (
    <Row className="justify-content-center g-2">
      {records?.map((record) => (
        <Col
          xs={12}
          sm={6}
          md={3}
          className="d-flex justify-content-center"
          key={record.id}
        >
          {renderItem(record)}
        </Col>
      ))}
    </Row>
  );
};

export default GridList;

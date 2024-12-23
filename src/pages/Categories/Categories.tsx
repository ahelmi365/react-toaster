import actGetCategories from "@store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Heading from "@components/common/Heading/Heading";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { Container } from "react-bootstrap";
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

  if (records) {
    return (
      <Container>
        <Heading>Categories</Heading>
        <Loading status={loading} error={error}>
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

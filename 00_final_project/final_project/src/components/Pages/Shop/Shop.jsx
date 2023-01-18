import "./styles.scss";
import React, { useState, useEffect } from "react";

//bootstrap
import { Col, Container, Row } from "react-bootstrap";
import ProductsList from "../../ProductsList/ProductsList";
import LoaderContainer from "../../../sharedComponents/LoaderContainer/LoaderContainer";
import { SortBy } from "./SortBy/SortByt.jsx";
import { Filters } from "./Filters/Filters";
import { HeroArea } from "./HeroArea/HeroArea";

const Shop = ({ productsList, isLoading, error }) => {
  const [filteredList, setFilteredList] = useState(null);
  const [resetFilters, setResetFilters] = useState(false);
  const [selectedFilterName, setSelectedFilterName] = useState("All");

  //filter by categories
  function showCategories(e) {
    const categoryNumber = e.target.value;
    const filterByCategory = productsList.filter(
      (val) => val.category.id == categoryNumber
    );
    categoryNumber == 1 ? setSelectedFilterName("Snickers") : "All";
    categoryNumber == 2 ? setSelectedFilterName("Coats") : "All";
    categoryNumber == 3 ? setSelectedFilterName("Pants") : "All";
    categoryNumber == 4 ? setSelectedFilterName("Jackets") : "All";
    setFilteredList(filterByCategory);
  }
  //filter by size
  function showSizes(e) {
    const sizeNumber = e.target.value;
    const filterBySize = productsList.filter(
      (val) => val.sizes[sizeNumber] > 0
    );
    setSelectedFilterName("Size " + sizeNumber);
    setFilteredList(filterBySize);
  }
  //select sort by
  const handleChangeSortBy = (e) => {
    const selectedValue = e.target.value;
    setFilteredList(null);
    if (selectedValue === "brand") {
      const sortListBrand = [...productsList].sort((a, b) =>
        a.brand > b.brand ? 1 : -1
      );
      setFilteredList(sortListBrand);
    } else if (selectedValue === "hightoLow") {
      const sortLisPrice = [...productsList].sort((a, b) => b.price - a.price);
      setFilteredList(sortLisPrice);
    } else if (selectedValue === "name") {
      const sortListName = [...productsList].sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setFilteredList(sortListName);
    } else if (selectedValue === "score") {
      const sortLisScore = [...productsList].sort((a, b) => a.score > b.score);
      setFilteredList(sortLisScore);
    }
  };
  //remove filters
  function removeFilters() {
    setSelectedFilterName("All");
    setResetFilters(true);
    setFilteredList(null);
  }

  return (
    <Container fluid className="p-0">
      <HeroArea filterName={selectedFilterName} />
      <section className="p-3 sort-by-section">
        <Container>
          <Row>
            <Col lg={6} className="d-flex justify-content-start m-0 p-0">
              <p className="sort-by-section-title">Tops</p>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <SortBy handleChangeSortBy={handleChangeSortBy} />
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg={3}>
            <Filters
              removeFilters={removeFilters}
              showCategories={showCategories}
              showSizes={showSizes}
              filteredList={filteredList}
              selectedFilter={selectedFilterName}
            ></Filters>
          </Col>
          <Col lg={9}>
            <Container>
              <Row style={{ margin: "auto -28px auto auto" }}>
                {isLoading && <LoaderContainer />}
                {!isLoading && filteredList == null && (
                  <ProductsList productsList={productsList} col={"col-4"} />
                )}
                {!isLoading && filteredList && (
                  <ProductsList productsList={filteredList} col={"col-4"} />
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Shop;

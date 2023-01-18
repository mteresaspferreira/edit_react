import "./styles.scss";

import Accordion from "react-bootstrap/Accordion";

export const Filters = ({
  removeFilters,
  showCategories,
  showSizes,
  filteredList,
  selectedFilter,
}) => {
  return (
    <aside className="mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="filters-title">Filters</h3>
        <button
          className="btn-remove-filter"
          onClick={removeFilters}
          disabled={!filteredList}
        >
          remove filters
        </button>
      </div>

      <hr></hr>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tops</Accordion.Header>
          <Accordion.Body>
            <button
              onClick={showCategories}
              value={4}
              disabled={selectedFilter == "Jackets"}
            >
              Jackets
            </button>
            <button
              onClick={showCategories}
              value={2}
              disabled={selectedFilter == "Coats"}
            >
              Coats
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bottoms</Accordion.Header>
          <Accordion.Body>
            <button
              onClick={showCategories}
              value={3}
              disabled={selectedFilter == "Pants"}
            >
              Pants
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Shoes</Accordion.Header>
          <Accordion.Body>
            <button
              onClick={showCategories}
              value={1}
              disabled={selectedFilter == "Snickers"}
            >
              Snickers
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr></hr>
      <div className="size-buttons">
        <h3>- Sizes</h3>
        <div className="buttons-container">
          <button
            className="btn-size"
            onClick={showSizes}
            value={1}
            disabled={selectedFilter == "Size 1"}
          >
            1
          </button>
          <button
            className="btn-size"
            onClick={showSizes}
            value={2}
            disabled={selectedFilter == "Size 2"}
          >
            2
          </button>
          <button
            className="btn-size"
            onClick={showSizes}
            value={3}
            disabled={selectedFilter == "Size 3"}
          >
            3
          </button>
          <button
            className="btn-size"
            onClick={showSizes}
            value={4}
            disabled={selectedFilter == "Size 4"}
          >
            4
          </button>
        </div>
        <p className="sizes-info">See our sizing guide</p>
      </div>
    </aside>
  );
};

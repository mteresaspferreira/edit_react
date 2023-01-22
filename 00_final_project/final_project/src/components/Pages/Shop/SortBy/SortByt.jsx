import React from "react";
import "./styles.scss";

export const SortBy = ({ handleChangeSortBy }) => {
  return (
    <>
      <span className="sort-by-title">Sort by</span>
      <select className="sort-by-selection" onChange={handleChangeSortBy}>
        <option defaultValue>select</option>
        <option value={"hightoLow"}>price</option>
        <option value={"name"}>name</option>
        <option value={"brand"}>brand</option>
        <option value={"score"}>score</option>
      </select>
    </>
  );
};

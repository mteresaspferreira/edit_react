import ProductsList from "../../../ProductsList/ProductsList";
import TitleSection from "../TitleSection/TitleSection";

const TopProducts = ({ productsList, loading, error }) => {
  //sort by score ans height products
  const scoreProductList = [...productsList].sort((a, b) => b.score - a.score);
  const limitProductList = [...productsList].slice(0, 8);

  return (
    <>
      <TitleSection titleName="Top Products" />
      <article className="row d-flex flex-wrap align-items-start product-list">
        {!loading && scoreProductList.length > 0 && (
          <ProductsList
            productsList={limitProductList}
            col={"col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6"}
          />
        )}
        {!loading && scoreProductList.length === 0 && !error && (
          <p>Products not found</p>
        )}
        {!loading && error && <p>{error}</p>}
      </article>
    </>
  );
};

export default TopProducts;

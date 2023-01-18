import "./styles.scss";

const SiteMapLinks = ({ items }) => {
  return (
    <ul className="site-map-links">
      {items.map((el) => (
        <li key={el}>
          <a>{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default SiteMapLinks;

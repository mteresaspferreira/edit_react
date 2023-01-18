import "./styles.css";

const CurrentDate = () => {
  //current date
  const date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  return (
    <div className="date-list">
      <p className="date-list--day">{day}</p>
      <p className="date-list--monthYear">
        <span className="date-list--month">{month}</span>
        <span className="date-list--year">{year}</span>
      </p>
    </div>
  );
};

export default CurrentDate;

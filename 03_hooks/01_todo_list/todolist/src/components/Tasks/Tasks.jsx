const Tasks = ({ list }) => {
  console.log("list ", list);
  return (
    <ul className="card-main">
      {list.map((el) => (
        <li
          key={el.id}
          className={"task " + (el.complete ? "completed" : null)}
        >
          <span>{el.task}</span>
          <span>{el.complete ? "✅" : "❌"}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;

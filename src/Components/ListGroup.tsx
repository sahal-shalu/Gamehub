function ListGroup() {
  let item = ["london", "newyourk", "america", "ponnani", "pattambi"];

  return (
    <>
      <h1>List </h1>
      {item.length === 0 ? <p>no item is liisted</p> : null}
      {}
      <ul className="list-group">
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

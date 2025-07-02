import "./styles.css";

function itemList({ title, description, created_at }) {
  return (
    <div className="item-list-container">
      <strong>{title}</strong>
      <p>
        <b>Data Criação:</b> {created_at}
      </p>
      <p>
        <b>Descrição:</b> {description}
      </p>
      <hr />
    </div>
  );
}

export default itemList;

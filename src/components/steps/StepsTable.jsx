import "./Steps.css";

export default function StepsTable(props) {
  const { table, delBut } = props;
  if (table.length === 0) {
    return (
      <div className="step-container-table">
        <div className="step-container-table-hd">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Удалить\Ред.</span>
        </div>
        <div className="step-container-table-body">
          <span>ВЫ НЕ БЕГАЛИ</span>
        </div>
      </div>
    );
  }
  return (
    <div className="step-container-table">
      <div className="step-container-table-hd">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Удалить\Ред.</span>
      </div>
      <div className="step-container-table-body">
        {table.map((el) => (
          <div
            key={el.date}
            id={el.date}
            className="step-container-table-body-el"
          >
            <span>{el.date}</span>
            <span>{el.distance}</span>
            <span>
              <a className="material-icons" onClick={delBut}>
                delete_forever
              </a>
              <a className="material-icons">edit</a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

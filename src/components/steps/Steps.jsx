import { useState } from "react";
import "./Steps.css";

import StepsTable from "./StepsTable";

let td = [];

export default function Steps() {
  const [form, setForm] = useState({
    date: "",
    distance: 0,
    table: td,
  });

  const { date, distance, table } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = table.findIndex((el) => el.date === form.date);
    if (i === -1) {
      td.push({ date: date, distance: distance });
    } else {
      td[i].distance = Number(td[i].distance) + Number(distance);
      setForm((prevForm) => ({
        ...prevForm,
        table: td,
      }));
    }

    setForm((prevForm) => ({
      ...prevForm,
      table: td,
    }));
  };

  const delElement = (e) => {
    td = td.filter(
      (el) => el.date !== e.target.closest(".step-container-table-body-el").id
    );
    setForm((prevForm) => ({
      ...prevForm,
      table: td,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="step-container">
      <div className="step-container-app">
        <form
          className="step-container-input"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            Дата (ДД.ММ.ГГ)
            <input
              name="date"
              type="date"
              className="data-input"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Пройдено км
            <input
              className="data-input"
              type="number"
              name="distance"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <button className="data-input" type="submit">
              OK
            </button>
          </label>
        </form>
        <StepsTable table={form.table} delBut={delElement} />
      </div>
    </div>
  );
}

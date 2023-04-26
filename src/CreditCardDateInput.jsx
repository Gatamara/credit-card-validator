import React from "react";

export const CreditCardDateInput = ({ month, year, setMonth, setYear }) => {
  function handleMonthChange(e) {
    const value = e.target.value;

    setMonth(value);
  }

  function handleYearChange(e) {
    const value = e.target.value;
    setYear(value);
  }

  return (
    <div className="date">
      <div>
        <h2 className="title2">Mes</h2>
        <select
          name="select"
          value={month}
          onChange={handleMonthChange}
          id="dateCard"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="3">5</option>
          <option value="3">6</option>
          <option value="3">7</option>
          <option value="3">8</option>
          <option value="3">9</option>
          <option value="3">10</option>
          <option value="3">11</option>
          <option value="3">12</option>
        </select>
      </div>
      <div>
        <h2 className="title2">Año</h2>
        <select
          value={year}
          onChange={handleYearChange}
          name="select"
          id="dateCard"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
          <option value="2033">2033</option>
          <option value="2034">2034</option>
        </select>
      </div>
    </div>
  );
};

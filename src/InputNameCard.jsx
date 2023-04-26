import React from "react";

export const InputNameCard = ({ InputValueName, setInputValueName }) => {
  const handleInputChange = (event) => {
    setInputValueName(event.target.value);
  };

  return (
    <>
      <input
        id="numerosTarjeta"
        type="text"
        name="NombreTarjeta"
        value={InputValueName}
        onChange={handleInputChange}
      />
    </>
  );
};

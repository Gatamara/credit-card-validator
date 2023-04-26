export const InputCard = ({ cardNumber, setCardNumber }) => {
  console.log(cardNumber);

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    if (!isNaN(value)) {
      console.log("is Nan", value);
    }

    // const spacedCardNumber = value
    //   .replaceAll(" ", "")
    //   .split("")
    //   .map((x, i) => {
    //     if (i === 3 || i === 7 || i === 11) {
    //       return x + " ";
    //     } else {
    //       return x;
    //     }
    //   })
    //   .join("");
    setCardNumber(value);
  };

  return (
    <input
      id="numerosTarjeta"
      type="text"
      name="numerosTarjeta"
      maxLength="16"
      onChange={handleInputChange}
      value={cardNumber}
    />
  );
};

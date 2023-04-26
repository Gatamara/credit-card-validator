import { useEffect, useState } from "react";
import { ButtonCard } from "./ButtonCard";
import { InputCard } from "./InputCard";
import { InputNameCard } from "./InputNameCard";
import { CreditCardDateInput } from "./CreditCardDateInput";

const ofuscarNumero = (numeroTarjeta) => {
  const ofucado = numeroTarjeta
    .replaceAll(" ", "")
    .split("")
    .map((x, i) => {
      if (i <= 11) {
        return "#";
      } else {
        return x;
      }
    })
    .map((x, i) => {
      if (i == 3 || i == 7 || i == 11) {
        return x + " ";
      } else {
        return x;
      }
    })
    .join("");

  return ofucado;
};

export default function CreditCard() {
  const [ofuscatedCardNumber, setOfuscatedCardNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [InputValueName, setInputValueName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const result = ofuscarNumero(cardNumber);
    setOfuscatedCardNumber(result);
  }, [cardNumber]);

  return (
    <>
      <h1>Tarjeta de Credito</h1>
      <main>
        <div className="info-card">
          <h2 className="title2">Numero de tarjeta</h2>
          <InputCard
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            ofuscatedCardNumber={ofuscatedCardNumber}
            setOfuscatedCardNumber={setOfuscatedCardNumber}
          />
          <ButtonCard
            cardNumber={cardNumber}
            setIsValid={setIsValid}
            setOfuscatedCardNumber={setOfuscatedCardNumber}
          />
          <h2 className="title2">Nombre del Titular</h2>
          <InputNameCard
            InputValueName={InputValueName}
            setInputValueName={setInputValueName}
          />
          <CreditCardDateInput
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </div>
        <div className="tarjeta border-color">
          <div className="img-chip">
            <img src="./assets/chip.png" alt="chip" />
            <img src="./assets/visa.png " alt="chip" />
          </div>

          <div className="numberCreditCard">{ofuscatedCardNumber} </div>
          <div className="date-card-name">
            <div>
              <h2 className="title2"> Nombre del titular</h2>
              <p>{InputValueName} </p>
            </div>

            <div>
              <h2 className="title2 fecha-centrar"> Fecha</h2>
              <p>
                {" "}
                {month}/ {year}
              </p>
            </div>
          </div>
        </div>

        {isValid != null ? (
          <div>
            {isValid ? (
              <p className="success-color"> La tarjeta es valida </p>
            ) : (
              <p className="invalid-color"> La tarjeta no es valida </p>
            )}
          </div>
        ) : null}
      </main>
    </>
  );
}

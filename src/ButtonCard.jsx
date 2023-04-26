// //numero card valido 5253554555555555

const validarNumero = (numeroTarjeta) => {
  const numeroTarjetaSinEspacio = numeroTarjeta.replaceAll(" ", "");
  if (numeroTarjetaSinEspacio.length === 16) {
    console.log("recibi el valor del input    " + numeroTarjetaSinEspacio);
    console.log(typeof numeroTarjetaSinEspacio);
    //pasando el valor de string a array con numeros
    const arrayCardNumber = numeroTarjetaSinEspacio.split("");

    const newArray = arrayCardNumber.map(function (elemento, index) {
      const elementoNumber = parseInt(elemento);

      if (index % 2 == 0) {
        const duplicado = elementoNumber * 2;
        if (duplicado > 9) {
          return duplicado
            .toString()
            .split("")
            .reduce(function (x, y) {
              // x es el iniciador y despues es el valor acumulado y Y sera el siguiente del arreglo
              return x + parseInt(y);
            }, 0);
        } else {
          return duplicado;
        }
      } else {
        return elementoNumber;
      }
    });
    console.log(newArray);
    const arregloSumado = newArray.reduce(function (a, b) {
      return a + parseInt(b);
    }, 0);

    console.log(arregloSumado);
    console.log(typeof arregloSumado);

    if (arregloSumado > 0 && arregloSumado % 10 == 0) {
      //hacemos la comparación

      //return <p> La tarjeta es valida</p>;
      console.log("la tarjeta es valida");
      return true;
    } else {
      // return <p> La tarjeta es Invalida</p>;
      console.log("la tarjeta es Invalida");
      return false;
    }
  } else {
    alert("Por favor ingresa 16 caracteres");
    return false;
  }
};

export const ButtonCard = ({
  cardNumber,
  setIsValid,
  setOfuscatedCardNumber,
}) => {
  function handleButtonClick() {
    const isCardNmumberValid = validarNumero(cardNumber);

    setIsValid(isCardNmumberValid);
  }
  return (
    <>
      <button onClick={handleButtonClick} className="button">
        Validar
      </button>
    </>
  );
};

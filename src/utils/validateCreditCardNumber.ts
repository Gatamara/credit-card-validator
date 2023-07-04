export const validateCreditCardNumber = (value: string) => {

    let errorMessage = '';

    // Eliminar espacios en blanco y guiones del número de tarjeta
    const cleanedValue = value.replace(/[\s-]/g, '');

    // Verificar si el número de tarjeta tiene entre 13 y 19 dígitos
    if (!/^\d{16}$/.test(cleanedValue)) {
        errorMessage = 'El número de tarjeta de crédito debe tener 16 dígitos';
    }

    // Verificar si el número de tarjeta es válido utilizando el algoritmo de Luhn
    const digits = cleanedValue.split('').reverse().map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    if (sum % 10 !== 0) {
        errorMessage = 'El número de tarjeta de crédito no es válido';
    }

    return errorMessage;
};